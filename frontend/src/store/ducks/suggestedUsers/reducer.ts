import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import {
  SuggestedUsersActions,
  SuggestedUsersActionsType,
} from "./contracts/actionTypes";

import { SuggestedUsers } from "./contracts/state";

const initialSuggestedUsersState: SuggestedUsers = {
  items: [],
  loadingStatus: LoadingStatus.NEVER,
};

export const suggestedUsersReducer = produce(
  (draft: Draft<SuggestedUsers>, action: SuggestedUsersActions) => {
    if (action.type === SuggestedUsersActionsType.SET_SUGGESTED_USERS) {
      draft.items = action.payload;
      draft.loadingStatus = LoadingStatus.LOADED;
    }
    if (action.type === SuggestedUsersActionsType.FETCH_SUGGESTED_USERS) {
      draft.loadingStatus = LoadingStatus.LOADING;
    }
    if (action.type === SuggestedUsersActionsType.SET_LOADING_STATUS) {
      draft.loadingStatus = action.payload;
    }
    if (action.type === SuggestedUsersActionsType.SET_LOADING_STATUS) {
      draft.loadingStatus = action.payload;
    }
  },
  initialSuggestedUsersState
);
