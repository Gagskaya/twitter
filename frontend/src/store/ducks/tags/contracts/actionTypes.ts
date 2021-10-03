import { Action } from "redux";
import { LoadingStatus } from "../../../types";
import { Tags } from "./state";

export enum TagsActionsType {
  SET_TAGS = "tags/SET_TAGS",
  FETCH_TAGS = "tags/FETCH_TAGS",
  SET_LOADING_STATUS = "tags/SET_LOADING_STATUS",
  DELETE_TAG = "tags/DELETE_TAG",
}

export interface SetTagsAction extends Action<TagsActionsType> {
  type: TagsActionsType.SET_TAGS;
  payload: Tags["items"];
}

export interface SetTagsLoadingStatusAction extends Action<TagsActionsType> {
  type: TagsActionsType.SET_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface FetchTagsAction extends Action<TagsActionsType> {
  type: TagsActionsType.FETCH_TAGS;
}

export interface DeleteTagAction extends Action<TagsActionsType> {
  type: TagsActionsType.DELETE_TAG;
  payload: number;
}

export type TagsActions =
  | SetTagsAction
  | SetTagsLoadingStatusAction
  | FetchTagsAction
  | DeleteTagAction;
