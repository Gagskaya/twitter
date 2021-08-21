import { Action } from "redux";
import { LoadingState, Tweets } from "./contracts/state";

export enum TweetsActionsType {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
  FETCH_THEMES = "themes/FETCH_THEMES",
  SET_THEMES = "themes/SET_THEMES",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
}

export interface SetTweetsAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: Tweets["items"];
}

export interface SetTweetsLoadingStateAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchTweetsAction extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

export const setTweets = (payload: Tweets["items"]): SetTweetsAction => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const setTweetsLoadingState = (
  payload: LoadingState
): SetTweetsLoadingStateAction => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTweets = (): FetchTweetsAction => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export type TweetsActions =
  | SetTweetsAction
  | SetTweetsLoadingStateAction
  | FetchTweetsAction;
