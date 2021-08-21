import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState, Tags } from "./contracts/state";

export const selectTags = (state: RootState): Tags => state.tags;
export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);

export const selectLoadingState = (state: RootState): LoadingState =>
  state.tags.loadingState;
export const selectIsTagsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;
export const selectIsTagsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;
