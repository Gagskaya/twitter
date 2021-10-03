import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingStatus } from "../../types";
import { Tags } from "./contracts/state";

export const selectTags = (state: RootState): Tags => state.tags;
export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
  state.tags.loadingStatus;
export const selectIsTagsLoading = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADING;
export const selectIsTagsLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADED;
