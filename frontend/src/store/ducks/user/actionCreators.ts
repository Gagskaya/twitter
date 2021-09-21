import { Action } from "redux";
import { LoginFormProps, User } from "./contracts/state";

export enum UserActionsType {
  SET_USER = "user/SET_USER",
  FETCH_USER_SIGNIN = "user/FETCH_USER_SIGNIN",
  FETCH_USER_DATA = "user/FETCH_USER_DATA",
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

export const setUser = (payload: User): SetUserAction => ({
  type: UserActionsType.SET_USER,
  payload,
});

export const fetchUserSignIn = (
  payload: LoginFormProps
): FetchUserSignInAction => ({
  type: UserActionsType.FETCH_USER_SIGNIN,
  payload,
});

export const fetchUserData = (): FetchUserDataAction => ({
  type: UserActionsType.FETCH_USER_DATA,
});

export type UserActions = SetUserAction | FetchUserSignInAction;
