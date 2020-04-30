import { Router } from "express";
import {
  signUp,
  makeTweet,
  myTweets,
  myMentionsTweets,
} from "../controller/controller";
const router = Router();
router.post("/signUp", signUp);
router.post("/makeTweet", makeTweet);
router.get("/myTweets", myTweets);
router.get("/myMentions", myMentionsTweets);
export default router;
