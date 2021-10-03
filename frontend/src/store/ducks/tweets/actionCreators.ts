import { LoadingStatus } from "../../types";
import {
  FetchTweetsAction,
  SetTweetsAction,
  SetTweetsLoadingStatusAction,
  TweetsActionsType,
} from "./contracts/actionTypes";
import { Tweets } from "./contracts/state";

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
