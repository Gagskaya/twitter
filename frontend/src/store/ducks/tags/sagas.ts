import { call, put, takeLatest } from "redux-saga/effects";
import { tagsApi } from "../../../services/api/tagsApi";
import {
  setTags,
  setTagsLoadingState,
  TagsActionsType,
} from "./actionCreators";
import { LoadingState } from "./contracts/state";

export function* fetchTagsRequest() {
  try {
    const items = yield call(tagsApi.fetchTags);
    yield put(setTags(items));
  } catch (error) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
}

export function* tagsSaga() {
  yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}
