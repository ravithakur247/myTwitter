"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller/controller");
const router = express_1.Router();
router.post("/signUp", controller_1.signUp);
router.post("/makeTweet", controller_1.makeTweet);
router.get("/myTweets", controller_1.myTweets);
router.get("/myMentions", controller_1.myMentionsTweets);
exports.default = router;
