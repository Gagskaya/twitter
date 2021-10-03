import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingStatus } from "../../types";
import { Tweets } from "./contracts/state";

export const selectTweets = (state: RootState): Tweets => state.tweets;
export const selectTweetsItems = createSelector(
  selectTweets,
  (tweets) => tweets.items
);

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
  state.tweets.loadingStatus;
export const selectIsTweetsLoading = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADING;
export const selectIsTweetsLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;
