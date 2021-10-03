import { LoadingStatus } from "../../../types";

export interface SuggestedUser {
  _id: string;
  user: {
    fullName: string;
    userName: string;
    avatar: string;
  };
}
export interface SuggestedUsers {
  items: SuggestedUser[];
  loadingStatus: LoadingStatus;
}
