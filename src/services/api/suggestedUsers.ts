import axios from "axios";
import { SuggestedUsers } from "../../store/ducks/suggestedUsers/contracts/state";

export const suggestedUsersApi = {
  fetchSuggestedUsers(): Promise<SuggestedUsers["items"]> {
    return axios
      .get("http://localhost:3001/suggestedUsers")
      .then(({ data }) => data);
  },
};
