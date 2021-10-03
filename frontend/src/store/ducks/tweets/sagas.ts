import { call, put, takeLatest } from "redux-saga/effects";
import { tweetsApi } from "../../../services/api/tweetsApi";
import { LoadingStatus } from "../../types";
import { setTweets, setTweetsLoadingStatus } from "./actionCreators";
import { TweetsActionsType } from "./contracts/actionTypes";

export function* fetchTweetsRequest() {
  try {
    yield put(setTweetsLoadingStatus(LoadingStatus.LOADING));
    const items = yield call(tweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}
