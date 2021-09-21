import { call, put, takeLatest } from "redux-saga/effects";
import { userApi } from "../../../services/api/userApi";
import {
  FetchUserSignInAction,
  setUser,
  UserActionsType,
} from "./actionCreators";

export function* fetchUserSignInRequest({ payload }: FetchUserSignInAction) {
  try {
    const { data } = yield call(userApi.fetchUserSignIn, payload);
    window.localStorage.setItem("token", data.token);
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield takeLatest(UserActionsType.FETCH_USER_SIGNIN, fetchUserSignInRequest);
}
