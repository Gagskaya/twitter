import { call, put, takeLatest } from "redux-saga/effects";
import { suggestedUsersApi } from "../../../services/api/suggestedUsers";
import { LoadingStatus } from "../../types";
import {
  setSuggestedUsers,
  setSuggestedUsersLoadingStatus,
} from "./actionCreators";
import { SuggestedUsersActionsType } from "./contracts/actionTypes";

export function* fetchSuggestedUsersRequest() {
  try {
    yield put(setSuggestedUsersLoadingStatus(LoadingStatus.LOADING));
    const items = yield call(suggestedUsersApi.fetchSuggestedUsers);
    yield put(setSuggestedUsers(items));
  } catch (error) {
    yield put(setSuggestedUsersLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* suggestedUsersSaga() {
  yield takeLatest(
    SuggestedUsersActionsType.FETCH_SUGGESTED_USERS,
    fetchSuggestedUsersRequest
  );
}
