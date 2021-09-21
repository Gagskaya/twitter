import { RootState } from "../../store";
import { UserState } from "./contracts/state";

export const selectUser = (state: RootState): UserState => state.user;
export const selectIsAuth = (state: RootState): boolean =>
  !!selectUser(state).data;
// export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);

// export const selectLoadingState = (state: RootState): LoadingState =>
//   state.tags.loadingState;
// export const selectIsTagsLoading = (state: RootState): boolean =>
//   selectLoadingState(state) === LoadingState.LOADING;
// export const selectIsTagsLoaded = (state: RootState): boolean =>
//   selectLoadingState(state) === LoadingState.LOADED;
