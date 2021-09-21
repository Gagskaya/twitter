import { all } from "redux-saga/effects";
import { tweetsSaga } from "./ducks/tweets/sagas";
import { tagsSaga } from "./ducks/tags/sagas";
import { suggestedUsersSaga } from "./ducks/suggestedUsers/sagas";
import { userSaga } from "./ducks/user/sagas";
export default function* rootSaga() {
  yield all([tweetsSaga(), tagsSaga(), suggestedUsersSaga(), userSaga()]);
}
