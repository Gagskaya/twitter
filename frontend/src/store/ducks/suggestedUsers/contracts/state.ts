export enum LoadingState {
  LOADING = "LOADING",
  LOADED = "LOADED",
  ERROR = "ERROR",
  NEVER = "NEVER",
}
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
  loadingState: LoadingState;
}
