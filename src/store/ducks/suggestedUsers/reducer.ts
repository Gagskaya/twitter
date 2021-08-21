import produce, { Draft } from "immer";
import {
  SuggestedUsersActions,
  SuggestedUsersActionsType,
} from "./actionCreators";
import { LoadingState, SuggestedUsers } from "./contracts/state";

const initialTweetsState: SuggestedUsers = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const suggestedUsersReducer = produce(
  (draft: Draft<SuggestedUsers>, action: SuggestedUsersActions) => {
    if (action.type === SuggestedUsersActionsType.SET_SUGGESTED_USERS) {
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
    }
    if (action.type === SuggestedUsersActionsType.FETCH_SUGGESTED_USERS) {
      draft.loadingState = LoadingState.LOADING;
    }
    if (action.type === SuggestedUsersActionsType.SET_LOADING_STATE) {
      draft.loadingState = action.payload;
    }
    if (action.type === SuggestedUsersActionsType.SET_LOADING_STATE) {
      draft.loadingState = action.payload;
    }
  },
  initialTweetsState
);
