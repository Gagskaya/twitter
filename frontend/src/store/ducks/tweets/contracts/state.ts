export enum LoadingState {
  LOADING = "LOADING",
  LOADED = "LOADED",
  ERROR = "ERROR",
  NEVER = "NEVER",
}
export interface Tweet {
  _id: string;
  user: {
    fullName: string;
    userName: string;
    avatar: string;
  };
  text: string;
}
export interface Tweets {
  items: Tweet[];
  loadingState: LoadingState;
}
