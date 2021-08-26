import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState, SuggestedUsers } from "./contracts/state";

export const selectSuggestedUsers = (state: RootState): SuggestedUsers =>
  state.suggestedUsers;
export const selectSuggestedUsersItems = createSelector(
  selectSuggestedUsers,
  (suggestedUsers) => suggestedUsers.items
);

export const selectLoadingState = (state: RootState): LoadingState =>
  state.suggestedUsers.loadingState;
export const selectIsSuggestedUsersLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;
export const selectIsSuggestedUsersLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;
