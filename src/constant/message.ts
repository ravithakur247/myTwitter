export enum Message {
  INTERNAL_SERVER_ERROR = "Oops!! something went wrong.",

  SUCCESS = "success",
  //successfully user created
  USER_CREATION_SUCCESS = "successfully user created.",
  //user Already Exist
  USER_ALREADY_EXIST = "handle already exist.try new handle.",
  //tweets created
  TWEET_CREATED_SUCCESSFULLY = "tweet done successfully.",
  //fetch my tweets
  MY_TWEET_FETCH_SUCCESS = "yours tweets fetched successfully.",
  //my mentioned tweets
  MY_MENTIONED_TWEETS_FETCH_SUCCESS="your mentioned tweets fetched successfully."
}
