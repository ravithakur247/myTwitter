"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const message_1 = require("../constant/message");
const httpStatus_1 = require("../constant/httpStatus");
const Users = [];
const Tweets = [];
exports.singUpService = (user) => {
    let index = Users.findIndex((ele) => ele.handle === user.handle);
    if (index < 0) {
        let newUser = {
            id: uuid_1.v4(),
            name: user.name,
            handle: user.handle,
        };
        Users.push(newUser);
        return {
            data: Users,
            message: message_1.Message.USER_CREATION_SUCCESS,
            statusCode: httpStatus_1.httpStatus.SUCCESS_CREATE,
        };
    }
    else {
        return {
            data: [],
            message: message_1.Message.USER_ALREADY_EXIST,
            statusCode: httpStatus_1.httpStatus.FORBIDDEN,
        };
    }
};
exports.makeTweetService = (tweet) => {
    let textArray = tweet.text.split(" ");
    let mentionArray = textArray.filter((ele) => ele.startsWith("@"));
    const mentionedUser = [];
    Users.forEach((user) => {
        if (mentionArray.includes(user.handle)) {
            mentionedUser.push(user.id);
        }
    });
    let tweetObject = {
        id: uuid_1.v4(),
        author: tweet.userName,
        tweet: tweet.text,
        mentions: mentionedUser,
        createdDate: new Date(),
    };
    Tweets.push(tweetObject);
    return {
        data: Tweets,
        message: message_1.Message.TWEET_CREATED_SUCCESSFULLY,
        statusCode: httpStatus_1.httpStatus.SUCCESS_CREATE,
    };
};
exports.myTweetService = (userID) => {
    let myTweetsData = [];
    myTweetsData = Tweets.filter((ele) => ele.author === userID);
    myTweetsData.sort((a, b) => {
        let tweet1Date = new Date(a.createdDate).getTime();
        let tweet2emp2Date = new Date(b.createdDate).getTime();
        return tweet1Date > tweet2emp2Date ? 1 : -1;
    });
    return {
        data: myTweetsData,
        message: message_1.Message.MY_TWEET_FETCH_SUCCESS,
        statusCode: httpStatus_1.httpStatus.SUCCESS,
    };
};
exports.myMentionsService = (userID) => {
    let myMentionsData = [];
    myMentionsData = Tweets.filter((ele) => ele.mentions.includes(userID));
    myMentionsData.sort((a, b) => {
        let tweet1Date = new Date(a.createdDate).getTime();
        let tweet2emp2Date = new Date(b.createdDate).getTime();
        return tweet1Date > tweet2emp2Date ? 1 : -1;
    });
    return {
        data: myMentionsData,
        message: message_1.Message.MY_MENTIONED_TWEETS_FETCH_SUCCESS,
        statusCode: httpStatus_1.httpStatus.SUCCESS,
    };
};
