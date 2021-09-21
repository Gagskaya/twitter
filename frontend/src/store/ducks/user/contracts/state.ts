export enum LoadingState {
  LOADING = "LOADING",
  LOADED = "LOADED",
  ERROR = "ERROR",
  NEVER = "NEVER",
}
export interface User {
  _id?: string;
  email: string;
  fullname: string;
  username: string;
  password: string;
  confirmHash: string;
  confirmed?: boolean;
  location?: string;
  about?: string;
  website?: string;
  token?: string;
}

export interface UserState {
  data: User | undefined;
}
export interface LoginFormProps {
  email: string;
  password: string;
}
