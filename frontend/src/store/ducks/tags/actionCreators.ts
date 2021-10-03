import { LoadingStatus } from "../../types";
import {
  DeleteTagAction,
  FetchTagsAction,
  SetTagsAction,
  SetTagsLoadingStatusAction,
  TagsActionsType,
} from "./contracts/actionTypes";
import { Tags } from "./contracts/state";

export const setTags = (payload: Tags["items"]): SetTagsAction => ({
  type: TagsActionsType.SET_TAGS,
  payload,
});

export const setTagsLoadingStatus = (
  payload: LoadingStatus
): SetTagsLoadingStatusAction => ({
  type: TagsActionsType.SET_LOADING_STATUS,
  payload,
});

export const fetchTags = (): FetchTagsAction => ({
  type: TagsActionsType.FETCH_TAGS,
});

export const deleteTag = (id: number): DeleteTagAction => ({
  type: TagsActionsType.DELETE_TAG,
  payload: id,
});
