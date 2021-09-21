import axios from "axios";
import { LoginFormProps } from "../../store/ducks/user/contracts/state";

export const userApi = {
  fetchUserSignIn(user: LoginFormProps) {
    return axios.post("http://localhost:8888/auth/login", user);
  },
};
