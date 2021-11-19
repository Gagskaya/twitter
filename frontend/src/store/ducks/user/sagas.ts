import { call, put, takeLatest } from "redux-saga/effects";
import { userApi } from "../../../services/api/userApi";
import { LoadingStatus } from "../../types";
import {
  setUser,
  setUserLoadingStatus,
  setUserLoginLoadingStatus,
  setUserRegisterLoadingStatus,
} from "./actionCreators";
import {
  FetchUserLoginAction,
  FetchUserRegisterAction,
  UserActionsType,
} from "./contracts/actionTypes";

export function* fetchUserRegisterRequest({
  payload,
}: FetchUserRegisterAction) {
  try {
    yield put(setUserRegisterLoadingStatus(LoadingStatus.LOADING));
    yield call(userApi.fetchUserRegister, payload);
    yield put(setUserRegisterLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setUserRegisterLoadingStatus(LoadingStatus.ERROR));
  }
}
export function* fetchUserLoginRequest({ payload }: FetchUserLoginAction) {
  try {
    yield put(setUserLoginLoadingStatus(LoadingStatus.LOADING));
    yield put(setUserRegisterLoadingStatus(LoadingStatus.NEVER));
    const { data } = yield call(userApi.fetchUserLogin, payload);
    window.localStorage.setItem("token", data.user.token);

    yield put(setUserLoginLoadingStatus(LoadingStatus.SUCCESS));

    yield put(setUser(data.user));
  } catch (error) {
    yield put(setUserLoginLoadingStatus(LoadingStatus.ERROR));
  }
}
export function* fetchUserDataRequest() {
  try {
    yield put(setUserLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(userApi.getMe);
    yield put(setUser(data.user));
    yield put(setUserLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(
    UserActionsType.FETCH_USER_REGISTER,
    fetchUserRegisterRequest
  );
  yield takeLatest(UserActionsType.FETCH_USER_LOGIN, fetchUserLoginRequest);
  yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest);
}
