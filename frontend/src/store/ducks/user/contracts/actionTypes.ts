import { Action } from "redux";
import { LoadingStatus } from "../../../types";
import { LoginFormProps, RegisterFormProps, User } from "./state";

export enum UserActionsType {
  SET_USER = "user/SET_USER",
  FETCH_USER_LOGIN = "user/FETCH_USER_LOGIN",
  FETCH_USER_REGISTER = "user/FETCH_USER_REGISTER",
  FETCH_USER_DATA = "user/FETCH_USER_DATA",
  SET_LOADING_STATUS = "user/SET_LOADING_STATUS",
  SET_REGISTER_LOADING_STATUS = "user/SET_REGISTER_LOADING_STATUS",
  SET_LOGIN_LOADING_STATUS = "user/SET_LOGIN_LOADING_STATUS",
}

export interface SetUserLoadingStatusAction extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATUS;
  payload: LoadingStatus;
}
export interface SetUserRegisterLoadingStatusAction
  extends Action<UserActionsType> {
  type: UserActionsType.SET_REGISTER_LOADING_STATUS;
  payload: LoadingStatus;
}
export interface SetUserLoginLoadingStatusAction
  extends Action<UserActionsType> {
  type: UserActionsType.SET_LOGIN_LOADING_STATUS;
  payload: LoadingStatus;
}
export interface SetUserAction extends Action<UserActionsType> {
  type: UserActionsType.SET_USER;
  payload: User;
}

export interface FetchUserRegisterAction extends Action<UserActionsType> {
  type: UserActionsType.FETCH_USER_REGISTER;
  payload: RegisterFormProps;
}
export interface FetchUserLoginAction extends Action<UserActionsType> {
  type: UserActionsType.FETCH_USER_LOGIN;
  payload: LoginFormProps;
}
export interface FetchUserDataAction extends Action<UserActionsType> {
  type: UserActionsType.FETCH_USER_DATA;
}

export type UserActions =
  | SetUserAction
  | FetchUserLoginAction
  | FetchUserDataAction
  | SetUserLoadingStatusAction
  | SetUserRegisterLoadingStatusAction
  | SetUserLoginLoadingStatusAction;
