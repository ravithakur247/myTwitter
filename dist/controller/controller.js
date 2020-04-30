"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Error_1 = require("../models/Error/Error");
const service_1 = require("../service/service");
const JsonModel_1 = require("../models/Result/JsonModel");
const message_1 = require("../constant/message");
exports.signUp = (req, res, next) => {
    try {
        const { handle, name } = req.body;
        let data = service_1.singUpService({ id: "", handle: handle, name: name });
        res.status(data.statusCode).json(new JsonModel_1.JsonModel(data, message_1.Message.SUCCESS));
    }
    catch (exception) {
        next(new Error_1.InternalServerError());
    }
};
exports.makeTweet = (req, res, next) => {
    try {
        const { text, userName } = req.body;
        let data = service_1.makeTweetService({ text: text, userName: userName });
        res.status(data.statusCode).json(new JsonModel_1.JsonModel(data, message_1.Message.SUCCESS));
    }
    catch (exception) {
        next(new Error_1.InternalServerError());
    }
};
exports.myTweets = (req, res, next) => {
    try {
        const userId = req.query.userId;
        let data = service_1.myTweetService(userId);
        res.status(data.statusCode).json(new JsonModel_1.JsonModel(data, message_1.Message.SUCCESS));
    }
    catch (exception) {
        next(new Error_1.InternalServerError());
    }
};
exports.myMentionsTweets = (req, res, next) => {
    try {
        const userId = req.query.userId;
        let data = service_1.myMentionsService(userId);
        res.status(data.statusCode).json(new JsonModel_1.JsonModel(data, message_1.Message.SUCCESS));
    }
    catch (exception) { }
};
