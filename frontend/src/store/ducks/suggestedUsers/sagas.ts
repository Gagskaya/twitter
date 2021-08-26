import { call, put, takeLatest } from "redux-saga/effects";
import { suggestedUsersApi } from "../../../services/api/suggestedUsers";
import {
  setSuggestedUsers,
  setSuggestedUsersLoadingState,
  SuggestedUsersActionsType,
} from "./actionCreators";
import { LoadingState } from "./contracts/state";

export function* fetchSuggestedUsersRequest() {
  try {
    const items = yield call(suggestedUsersApi.fetchSuggestedUsers);
    yield put(setSuggestedUsers(items));
  } catch (error) {
    yield put(setSuggestedUsersLoadingState(LoadingState.ERROR));
  }
}

export function* suggestedUsersSaga() {
  yield takeLatest(
    SuggestedUsersActionsType.FETCH_SUGGESTED_USERS,
    fetchSuggestedUsersRequest
  );
}
