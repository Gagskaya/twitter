import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { UserActions, UserActionsType } from "./contracts/actionTypes";
import { UserState } from "./contracts/state";

const initialUserState: UserState = {
  data: undefined,
  loadingStatus: LoadingStatus.NEVER,
};

export const userReducer = produce(
  (draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
      case UserActionsType.SET_USER:
        draft.data = action.payload;
        draft.loadingStatus = LoadingStatus.SUCCESS;
        break;
      case UserActionsType.SET_LOADING_STATUS:
        draft.loadingStatus = action.payload;
        break;
      default:
        break;
    }
  },
  initialUserState
);
