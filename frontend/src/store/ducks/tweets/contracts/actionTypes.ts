import { Action } from "redux";
import { LoadingStatus } from "../../../types";
import { Tweet, Tweets } from "./state";

export enum TweetsActionsType {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
  POST_TWEET = "tweets/POST_TWEET",
  FETCH_THEMES = "themes/FETCH_THEMES",
  SET_THEMES = "themes/SET_THEMES",
  SET_LOADING_STATUS = "tweets/SET_LOADING_STATUS",
  FETCH_POST_TWEET = "tweets/FETCH_POST_TWEET",
}

export interface SetTweetsAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: Tweets["items"];
}

export interface SetTweetsLoadingStatusAction
  extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface FetchTweetsAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

export interface PostTweetAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.POST_TWEET;
  payload: Tweet;
}
export interface FetchPostTweetAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_POST_TWEET;
  payload: Tweet;
}

export type TweetsActions =
  | SetTweetsAction
  | SetTweetsLoadingStatusAction
  | FetchTweetsAction
  | PostTweetAction
  | FetchPostTweetAction;
