import { IUser } from "./User";
export interface ITweet {
  id: string;
  tweet: string;
  mentions: string[];
  author: string;
  createdDate: Date;
}
