import { LoadingStatus } from "../../types";
import {
  FetchPostTweetAction,
  FetchTweetsAction,
  PostTweetAction,
  SetTweetsAction,
  SetTweetsLoadingStatusAction,
  TweetsActionsType,
} from "./contracts/actionTypes";
import { Tweet, Tweets } from "./contracts/state";

export const setTweets = (payload: Tweets["items"]): SetTweetsAction => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const setTweetsLoadingStatus = (
  payload: LoadingStatus
): SetTweetsLoadingStatusAction => ({
  type: TweetsActionsType.SET_LOADING_STATUS,
  payload,
});

export const fetchTweets = (): FetchTweetsAction => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export const postTweet = (payload: Tweet): PostTweetAction => ({
  type: TweetsActionsType.POST_TWEET,
  payload,
});
export const fetchPostTweet = (payload: Tweet): FetchPostTweetAction => ({
  type: TweetsActionsType.FETCH_POST_TWEET,
  payload,
});
