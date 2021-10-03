import { call, put, takeLatest } from "redux-saga/effects";
import { userApi } from "../../../services/api/userApi";
import { LoadingStatus } from "../../types";
import { setUser, setUserLoadingStatus } from "./actionCreators";
import {
  FetchUserSignInAction,
  UserActionsType,
} from "./contracts/actionTypes";

export function* fetchUserSignInRequest({ payload }: FetchUserSignInAction) {
  try {
    yield put(setUserLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(userApi.fetchUserSignIn, payload);
    window.localStorage.setItem("token", data.user.token);
    yield put(setUser(data.user));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}
export function* fetchUserDataRequest() {
  try {
    yield put(setUserLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(userApi.getMe);
    yield put(setUser(data.user));
  } catch (error) {
    yield put(setUserLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionsType.FETCH_USER_SIGNIN, fetchUserSignInRequest);
  yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest);
}
