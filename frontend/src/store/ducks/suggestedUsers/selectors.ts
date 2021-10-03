import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingStatus } from "../../types";
import { SuggestedUsers } from "./contracts/state";

export const selectSuggestedUsers = (state: RootState): SuggestedUsers =>
  state.suggestedUsers;
export const selectSuggestedUsersItems = createSelector(
  selectSuggestedUsers,
  (suggestedUsers) => suggestedUsers.items
);

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
  state.suggestedUsers.loadingStatus;
export const selectIsSuggestedUsersLoading = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADING;
export const selectIsSuggestedUsersLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;
