import { combineReducers } from "redux";
import { suggestedUsersReducer } from "./ducks/suggestedUsers/reducer";
import { tagsReducer } from "./ducks/tags/reducer";
import { tweetsReducer } from "./ducks/tweets/reducer";

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tags: tagsReducer,
  suggestedUsers: suggestedUsersReducer,
});
