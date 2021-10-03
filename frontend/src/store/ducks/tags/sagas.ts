import { call, put, takeLatest } from "redux-saga/effects";
import { tagsApi } from "../../../services/api/tagsApi";
import { LoadingStatus } from "../../types";
import { setTags, setTagsLoadingStatus } from "./actionCreators";
import { TagsActionsType } from "./contracts/actionTypes";

export function* fetchTagsRequest() {
  try {
    yield put(setTagsLoadingStatus(LoadingStatus.LOADING));
    const items = yield call(tagsApi.fetchTags);
    yield put(setTags(items));
  } catch (error) {
    yield put(setTagsLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* tagsSaga() {
  yield takeLatest(TagsActionsType.FETCH_TAGS, fetchTagsRequest);
}
