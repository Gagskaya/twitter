import { Action } from "redux";
import { LoadingStatus } from "../../../types";
import { LoginFormProps, User } from "./state";

export enum UserActionsType {
  SET_USER = "user/SET_USER",
  FETCH_USER_SIGNIN = "user/FETCH_USER_SIGNIN",
  FETCH_USER_DATA = "user/FETCH_USER_DATA",
  SET_LOADING_STATUS = "user/SET_LOADING_STATUS",
}

export interface SetUserLoadingStatusAction extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATUS;
  payload: LoadingStatus;
}
export interface SetUserAction extends Action<UserActionsType> {
  type: UserActionsType.SET_USER;
  payload: User;
}

export interface FetchUserSignInAction extends Action<UserActionsType> {
  type: UserActionsType.FETCH_USER_SIGNIN;
  payload: LoginFormProps;
}
export interface FetchUserDataAction extends Action<UserActionsType> {
  type: UserActionsType.FETCH_USER_DATA;
}

export type UserActions =
  | SetUserAction
  | FetchUserSignInAction
  | FetchUserDataAction
  | SetUserLoadingStatusAction;
