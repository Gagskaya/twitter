import { Action } from "redux";
import { LoadingState, Tags } from "./contracts/state";

export enum TagsActionsType {
  SET_TAGS = "tags/SET_TAGS",
  FETCH_TAGS = "tags/FETCH_TAGS",
  SET_LOADING_STATE = "tags/SET_LOADING_STATE",
  DELETE_TAG = "tags/DELETE_TAG",
}

export interface SetTagsAction extends Action<TagsActionsType> {
  type: TagsActionsType.SET_TAGS;
  payload: Tags["items"];
}

export interface SetTagsLoadingStateAction extends Action<TagsActionsType> {
  type: TagsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchTagsAction extends Action<TagsActionsType> {
  type: TagsActionsType.FETCH_TAGS;
}

export interface DeleteTagAction extends Action<TagsActionsType> {
  type: TagsActionsType.DELETE_TAG;
  payload: number;
}

export const setTags = (payload: Tags["items"]): SetTagsAction => ({
  type: TagsActionsType.SET_TAGS,
  payload,
});

export const setTagsLoadingState = (
  payload: LoadingState
): SetTagsLoadingStateAction => ({
  type: TagsActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchTags = (): FetchTagsAction => ({
  type: TagsActionsType.FETCH_TAGS,
});

export const deleteTag = (id: number): DeleteTagAction => ({
  type: TagsActionsType.DELETE_TAG,
  payload: id,
});
export type TagsActions =
  | SetTagsAction
  | SetTagsLoadingStateAction
  | FetchTagsAction
  | DeleteTagAction;
