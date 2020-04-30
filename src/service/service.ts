import { IUser } from "../interface/User";
import { ISingnUpResponse } from "../interface/SignUpResponse";
import { v4 as uuidv4 } from "uuid";
import { Message } from "../constant/message";
import { httpStatus } from "../constant/httpStatus";
import { ITweet } from "../interface/Tweet";
import { ITweetResponse } from "../interface/TweetResponse";
import { ITweetRequest } from "../interface/TweetRequest";

const Users: IUser[] = [];
const Tweets: ITweet[] = [];

export const singUpService = (user: IUser): ISingnUpResponse => {
  let index = Users.findIndex((ele) => ele.handle === user.handle);
  if (index < 0) {
    let newUser: IUser = {
      id: uuidv4(),
      name: user.name,
      handle: user.handle,
    };
    Users.push(newUser);
    return {
      data: Users,
      message: Message.USER_CREATION_SUCCESS,
      statusCode: httpStatus.SUCCESS_CREATE,
    };
  } else {
    return {
      data: [],
      message: Message.USER_ALREADY_EXIST,
      statusCode: httpStatus.FORBIDDEN,
    };
  }
};

export const makeTweetService = (tweet: ITweetRequest): ITweetResponse => {
  let textArray = tweet.text.split(" ");
  let mentionArray = textArray.filter((ele) => ele.startsWith("@"));
  const mentionedUser: string[] = [];
  Users.forEach((user) => {
    if (mentionArray.includes(user.handle)) {
      mentionedUser.push(user.id);
    }
  });
  let tweetObject: ITweet = {
    id: uuidv4(),
    author: tweet.userName,
    tweet: tweet.text,
    mentions: mentionedUser,
    createdDate: new Date(),
  };
  Tweets.push(tweetObject);
  return {
    data: Tweets,
    message: Message.TWEET_CREATED_SUCCESSFULLY,
    statusCode: httpStatus.SUCCESS_CREATE,
  };
};

export const myTweetService = (userID: string): ITweetResponse => {
  let myTweetsData: ITweet[] = [];
  myTweetsData = Tweets.filter((ele) => ele.author === userID);
  myTweetsData.sort((a, b) => {
    let tweet1Date = new Date(a.createdDate).getTime();
    let tweet2emp2Date = new Date(b.createdDate).getTime();
    return tweet1Date > tweet2emp2Date ? 1 : -1;
  });
  return {
    data: myTweetsData,
    message: Message.MY_TWEET_FETCH_SUCCESS,
    statusCode: httpStatus.SUCCESS,
  };
};

export const myMentionsService = (userID: string): ITweetResponse => {
  let myMentionsData: ITweet[] = [];
  myMentionsData = Tweets.filter((ele) => ele.mentions.includes(userID));
  myMentionsData.sort((a, b) => {
    let tweet1Date = new Date(a.createdDate).getTime();
    let tweet2emp2Date = new Date(b.createdDate).getTime();
    return tweet1Date > tweet2emp2Date ? 1 : -1;
  });
  return {
    data: myMentionsData,
    message: Message.MY_MENTIONED_TWEETS_FETCH_SUCCESS,
    statusCode: httpStatus.SUCCESS,
  };
};
