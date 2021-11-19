import { call, put, takeLatest } from "redux-saga/effects";
import { tweetsApi } from "../../../services/api/tweetsApi";
import { LoadingStatus } from "../../types";
import { postTweet, setTweets, setTweetsLoadingStatus } from "./actionCreators";
import { PostTweetAction, TweetsActionsType } from "./contracts/actionTypes";

export function* fetchTweetsRequest() {
  try {
    yield put(setTweetsLoadingStatus(LoadingStatus.LOADING));
    const items = yield call(tweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (error) {
    yield put(setTweetsLoadingStatus(LoadingStatus.ERROR));
  }
}
export function* FetchPostTweetRequest({ payload }: PostTweetAction) {
  try {
    yield put(setTweetsLoadingStatus(LoadingStatus.LOADING));
    const item = yield call(tweetsApi.postTweet, payload);
    yield put(postTweet(item));
  } catch (error) {
    yield put(setTweetsLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_POST_TWEET, FetchPostTweetRequest);
}
