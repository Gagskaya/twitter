import { LoadingStatus } from "../../types";
import {
  FetchUserDataAction,
  FetchUserLoginAction,
  FetchUserRegisterAction,
  SetUserAction,
  SetUserLoadingStatusAction,
  SetUserRegisterLoadingStatusAction,
  SetUserLoginLoadingStatusAction,
  UserActionsType,
} from "./contracts/actionTypes";
import { LoginFormProps, RegisterFormProps, User } from "./contracts/state";

export const setUserLoadingStatus = (
  payload: LoadingStatus
): SetUserLoadingStatusAction => ({
  type: UserActionsType.SET_LOADING_STATUS,
  payload,
});
export const setUserRegisterLoadingStatus = (
  payload: LoadingStatus
): SetUserRegisterLoadingStatusAction => ({
  type: UserActionsType.SET_REGISTER_LOADING_STATUS,
  payload,
});
export const setUserLoginLoadingStatus = (
  payload: LoadingStatus
): SetUserLoginLoadingStatusAction => ({
  type: UserActionsType.SET_LOGIN_LOADING_STATUS,
  payload,
});
export const setUser = (payload: User): SetUserAction => ({
  type: UserActionsType.SET_USER,
  payload,
});

export const fetchUserRegister = (
  payload: RegisterFormProps
): FetchUserRegisterAction => ({
  type: UserActionsType.FETCH_USER_REGISTER,
  payload,
});
export const fetchUserLogin = (
  payload: LoginFormProps
): FetchUserLoginAction => ({
  type: UserActionsType.FETCH_USER_LOGIN,
  payload,
});

export const fetchUserData = (): FetchUserDataAction => ({
  type: UserActionsType.FETCH_USER_DATA,
});
