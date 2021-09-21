import axios from "axios";
import { Tweets } from "../../store/ducks/tweets/contracts/state";

export const tweetsApi = {
  fetchTweets(): Promise<Tweets["items"]> {
    return axios
      .get("http://localhost:8888/tweets")
      .then(({ data }) => data.tweets);
  },
};
