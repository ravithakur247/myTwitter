"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message;
(function (Message) {
    Message["INTERNAL_SERVER_ERROR"] = "Oops!! something went wrong.";
    Message["SUCCESS"] = "success";
    //successfully user created
    Message["USER_CREATION_SUCCESS"] = "successfully user created.";
    //user Already Exist
    Message["USER_ALREADY_EXIST"] = "handle already exist.try new handle.";
    //tweets created
    Message["TWEET_CREATED_SUCCESSFULLY"] = "tweet done successfully.";
    //fetch my tweets
    Message["MY_TWEET_FETCH_SUCCESS"] = "yours tweets fetched successfully.";
    //my mentioned tweets
    Message["MY_MENTIONED_TWEETS_FETCH_SUCCESS"] = "your mentioned tweets fetched successfully.";
})(Message = exports.Message || (exports.Message = {}));
