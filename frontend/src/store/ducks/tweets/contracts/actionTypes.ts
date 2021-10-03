import { Action } from "redux";
import { LoadingStatus } from "../../../types";
import { Tweets } from "./state";

export enum TweetsActionsType {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
  FETCH_THEMES = "themes/FETCH_THEMES",
  SET_THEMES = "themes/SET_THEMES",
  SET_LOADING_STATUS = "tweets/SET_LOADING_STATUS",
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

export type TweetsActions =
  | SetTweetsAction
  | SetTweetsLoadingStatusAction
  | FetchTweetsAction;
