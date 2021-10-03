import { LoadingStatus } from "../../types";
import {
  FetchUserDataAction,
  FetchUserSignInAction,
  SetUserAction,
  SetUserLoadingStatusAction,
  UserActionsType,
} from "./contracts/actionTypes";
import { LoginFormProps, User } from "./contracts/state";

export const setUserLoadingStatus = (
  payload: LoadingStatus
): SetUserLoadingStatusAction => ({
  type: UserActionsType.SET_LOADING_STATUS,
  payload,
});
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
