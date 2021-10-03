import axios from "axios";
import produce, { Draft } from "immer";
import { LoadingStatus } from "../../types";
import { TagsActions, TagsActionsType } from "./contracts/actionTypes";
import { Tags } from "./contracts/state";

const initilTagsState: Tags = {
  items: [],
  loadingStatus: LoadingStatus.NEVER,
};

export const tagsReducer = produce(
  (draft: Draft<Tags>, action: TagsActions) => {
    if (action.type === TagsActionsType.SET_TAGS) {
      draft.items = action.payload;
      draft.loadingStatus = LoadingStatus.LOADED;
    }
    if (action.type === TagsActionsType.FETCH_TAGS) {
      draft.loadingStatus = LoadingStatus.LOADING;
    }
    if (action.type === TagsActionsType.SET_LOADING_STATUS) {
      draft.loadingStatus = action.payload;
    }
    if (action.type === TagsActionsType.DELETE_TAG) {
      draft.items = draft.items.filter((item) => action.payload !== item.id);
      axios.delete(`http://localhost:3001/tags/${action.payload}`);
    }
  },
  initilTagsState
);
