import { axios } from "../../core/axios";
import { LoginFormProps } from "../../store/ducks/user/contracts/state";

export const userApi = {
  fetchUserSignIn(user: LoginFormProps) {
    return axios.post("http://localhost:8888/auth/login", user);
  },
  getMe() {
    return axios.get("http://localhost:8888/users/me");
  },
};
