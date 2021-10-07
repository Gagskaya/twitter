import { RootState } from "../../store";
import { UserState } from "./contracts/state";

export const selectUser = (state: RootState): UserState => state.user;
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
