import { RootState } from "../../store";
import { User, UserState } from "./contracts/state";

export const selectUser = (state: RootState): UserState => state.user;
export const selectUserData = (state: RootState): User | undefined =>
  state.user.data;
export const selectIsAuth = (state: RootState): boolean =>
  !!selectUser(state).data;

export const selectUserLoadingStatus = (
  state: RootState
): UserState["loadingStatus"] => selectUser(state).loadingStatus;
export const selectUserRegisterLoadingStatus = (
  state: RootState
): UserState["registerLoadingStatus"] =>
  selectUser(state).registerLoadingStatus;
export const selectUserLoginLoadingStatus = (
  state: RootState
): UserState["loginLoadingStatus"] => selectUser(state).loginLoadingStatus;
