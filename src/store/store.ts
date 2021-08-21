import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import { Tweets } from "./ducks/tweets/contracts/state";
import { Tags } from "./ducks/tags/contracts/state";
import { SuggestedUsers } from "./ducks/suggestedUsers/contracts/state";
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
export interface RootState {
  tweets: Tweets;
  tags: Tags;
  suggestedUsers: SuggestedUsers;
}
sagaMiddleware.run(rootSaga);
