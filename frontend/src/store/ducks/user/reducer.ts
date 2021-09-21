import produce, { Draft } from "immer";
import { UserActions, UserActionsType } from "./actionCreators";
import { User, UserState } from "./contracts/state";

const initialTweetsState: UserState = {
  data: undefined,
};

export const userReducer = produce(
  (draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
      case UserActionsType.SET_USER:
        draft.data = action.payload;
        break;
      default:
        break;
    }
  },
  initialTweetsState
);
