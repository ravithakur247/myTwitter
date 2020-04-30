import { RequestHandler } from "express";
import { InternalServerError } from "../models/Error/Error";
import {
  singUpService,
  makeTweetService,
  myTweetService,
  myMentionsService,
} from "../service/service";
import { JsonModel } from "../models/Result/JsonModel";
import { httpStatus } from "../constant/httpStatus";
import { Message } from "../constant/message";

export const signUp: RequestHandler = (req, res, next) => {
  try {
    const { handle, name } = req.body;
    let data = singUpService({ id: "", handle: handle, name: name });
    res.status(data.statusCode).json(new JsonModel(data, Message.SUCCESS));
  } catch (exception) {
    next(new InternalServerError());
  }
};
export const makeTweet: RequestHandler = (req, res, next) => {
  try {
    const { text, userName } = req.body;
    let data = makeTweetService({ text: text, userName: userName });
    res.status(data.statusCode).json(new JsonModel(data, Message.SUCCESS));
  } catch (exception) {
    next(new InternalServerError());
  }
};

export const myTweets: RequestHandler = (req, res, next) => {
  try {
    const userId = req.query.userId as string;
    let data = myTweetService(userId);
    res.status(data.statusCode).json(new JsonModel(data, Message.SUCCESS));
  } catch (exception) {
    next(new InternalServerError());
  }
};

export const myMentionsTweets: RequestHandler = (req, res, next) => {
  try {
    const userId = req.query.userId as string;
    let data = myMentionsService(userId);
    res.status(data.statusCode).json(new JsonModel(data, Message.SUCCESS));
  } catch (exception) {}
};
