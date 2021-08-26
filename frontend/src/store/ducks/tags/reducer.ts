import axios from "axios";
import produce, { Draft } from "immer";
import { TagsActions, TagsActionsType } from "./actionCreators";
import { LoadingState, Tags } from "./contracts/state";

const initialTweetsState: Tags = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const tagsReducer = produce(
  (draft: Draft<Tags>, action: TagsActions) => {
    if (action.type === TagsActionsType.SET_TAGS) {
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
    }
    if (action.type === TagsActionsType.FETCH_TAGS) {
      draft.loadingState = LoadingState.LOADING;
    }
    if (action.type === TagsActionsType.SET_LOADING_STATE) {
      draft.loadingState = action.payload;
    }
    if (action.type === TagsActionsType.DELETE_TAG) {
      draft.items = draft.items.filter((item) => action.payload !== item.id);
      axios.delete(`http://localhost:3001/tags/${action.payload}`);
    }
  },
  initialTweetsState
);
