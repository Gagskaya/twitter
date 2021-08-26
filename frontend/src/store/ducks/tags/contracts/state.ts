export enum LoadingState {
  LOADING = "LOADING",
  LOADED = "LOADED",
  ERROR = "ERROR",
  NEVER = "NEVER",
}
export interface Tag {
  id: number;
  name: string;
  count: number;
}
export interface Tags {
  items: Tag[];
  loadingState: LoadingState;
}
