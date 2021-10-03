import { LoadingStatus } from "../../types";
import {
  FetchSuggestedUsersAction,
  SetSuggestedUsersAction,
  SetSuggestedUsersLoadingStatusAction,
  SuggestedUsersActionsType,
} from "./contracts/actionTypes";
import { SuggestedUsers } from "./contracts/state";

export const setSuggestedUsers = (
  payload: SuggestedUsers["items"]
): SetSuggestedUsersAction => ({
  type: SuggestedUsersActionsType.SET_SUGGESTED_USERS,
  payload,
});

export const setSuggestedUsersLoadingStatus = (
  payload: LoadingStatus
): SetSuggestedUsersLoadingStatusAction => ({
  type: SuggestedUsersActionsType.SET_LOADING_STATUS,
  payload,
});

export const fetchSuggestedUsers = (): FetchSuggestedUsersAction => ({
  type: SuggestedUsersActionsType.FETCH_SUGGESTED_USERS,
});
