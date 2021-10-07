import { LoadingStatus } from "../../../types";

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
  loadingStatus?: LoadingStatus;
  registerLoadingStatus: LoadingStatus;
  loginLoadingStatus: LoadingStatus;
}
export interface LoginFormProps {
  email: string;
  password: string;
}
export interface RegisterFormProps {
  email: string;
  username: string;
  fullname: string;
  password: string;
  confirmPassword: string;
}
