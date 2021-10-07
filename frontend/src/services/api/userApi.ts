import { axios } from "../../core/axios";
import {
  LoginFormProps,
  RegisterFormProps,
} from "../../store/ducks/user/contracts/state";

export const userApi = {
  async fetchUserLogin(user: LoginFormProps) {
    return await axios.post("http://localhost:8888/auth/login", user);
  },
  async fetchUserRegister(user: RegisterFormProps) {
    return await axios.post("http://localhost:8888/auth/register", user);
  },
  async getMe() {
    return await axios.get("http://localhost:8888/users/me");
  },
};
