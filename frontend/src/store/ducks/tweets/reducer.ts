import produce, { Draft } from "immer";
import { TweetsActions, TweetsActionsType } from "./actionCreators";
import { LoadingState, Tweets } from "./contracts/state";

const initialTweetsState: Tweets = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce(
  (draft: Draft<Tweets>, action: TweetsActions) => {
    if (action.type === TweetsActionsType.SET_TWEETS) {
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
    }
    if (action.type === TweetsActionsType.FETCH_TWEETS) {
      draft.loadingState = LoadingState.LOADING;
    }
    if (action.type === TweetsActionsType.SET_LOADING_STATE) {
      draft.loadingState = action.payload;
    }
  },
  initialTweetsState
);
