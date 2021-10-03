import { Action } from "redux";
import { LoadingStatus } from "../../../types";
import { SuggestedUsers } from "./state";
export enum SuggestedUsersActionsType {
  SET_SUGGESTED_USERS = "suggestedUsers/SET_SUGGESTED_USERS",
  FETCH_SUGGESTED_USERS = "suggestedUsers/FETCH_SUGGESTED_USERS",
  SET_LOADING_STATUS = "suggestedUsers/SET_LOADING_STATUS",
}

export interface SetSuggestedUsersAction
  extends Action<SuggestedUsersActionsType> {
  type: SuggestedUsersActionsType.SET_SUGGESTED_USERS;
  payload: SuggestedUsers["items"];
}

export interface SetSuggestedUsersLoadingStatusAction
  extends Action<SuggestedUsersActionsType> {
  type: SuggestedUsersActionsType.SET_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface FetchSuggestedUsersAction
  extends Action<SuggestedUsersActionsType> {
  type: SuggestedUsersActionsType.FETCH_SUGGESTED_USERS;
}
export type SuggestedUsersActions =
  | SetSuggestedUsersAction
  | SetSuggestedUsersLoadingStatusAction
  | FetchSuggestedUsersAction;
