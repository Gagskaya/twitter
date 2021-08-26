import { Action } from "redux";
import { LoadingState, SuggestedUsers } from "./contracts/state";

export enum SuggestedUsersActionsType {
  SET_SUGGESTED_USERS = "suggestedUsers/SET_SUGGESTED_USERS",
  FETCH_SUGGESTED_USERS = "suggestedUsers/FETCH_SUGGESTED_USERS",
  SET_LOADING_STATE = "suggestedUsers/SET_LOADING_STATE",
}

export interface SetSuggestedUsersAction
  extends Action<SuggestedUsersActionsType> {
  type: SuggestedUsersActionsType.SET_SUGGESTED_USERS;
  payload: SuggestedUsers["items"];
}

export interface SetSuggestedUsersLoadingStateAction
  extends Action<SuggestedUsersActionsType> {
  type: SuggestedUsersActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchSuggestedUsersAction
  extends Action<SuggestedUsersActionsType> {
  type: SuggestedUsersActionsType.FETCH_SUGGESTED_USERS;
}

export const setSuggestedUsers = (
  payload: SuggestedUsers["items"]
): SetSuggestedUsersAction => ({
  type: SuggestedUsersActionsType.SET_SUGGESTED_USERS,
  payload,
});

export const setSuggestedUsersLoadingState = (
  payload: LoadingState
): SetSuggestedUsersLoadingStateAction => ({
  type: SuggestedUsersActionsType.SET_LOADING_STATE,
  payload,
});

export const fetchSuggestedUsers = (): FetchSuggestedUsersAction => ({
  type: SuggestedUsersActionsType.FETCH_SUGGESTED_USERS,
});

export type SuggestedUsersActions =
  | SetSuggestedUsersAction
  | SetSuggestedUsersLoadingStateAction
  | FetchSuggestedUsersAction;
