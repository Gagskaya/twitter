import axios from "axios";
import { Tags } from "../../store/ducks/tags/contracts/state";

export const tagsApi = {
  fetchTags(): Promise<Tags["items"]> {
    return axios.get("http://localhost:3001/tags").then(({ data }) => data);
  },
};
