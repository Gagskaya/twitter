import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { TweetsActions, TweetsActionsType } from "./contracts/actionTypes";
import { Tweets } from "./contracts/state";

const initialTweetsState: Tweets = {
  items: [],
  loadingStatus: LoadingStatus.NEVER,
};

export const tweetsReducer = produce(
  (draft: Draft<Tweets>, action: TweetsActions) => {
    if (action.type === TweetsActionsType.SET_TWEETS) {
      draft.items = action.payload;
      draft.loadingStatus = LoadingStatus.LOADED;
    }
    if (action.type === TweetsActionsType.FETCH_TWEETS) {
      draft.loadingStatus = LoadingStatus.LOADING;
    }
    if (action.type === TweetsActionsType.SET_LOADING_STATUS) {
      draft.loadingStatus = action.payload;
    }
  },
  initialTweetsState
);
