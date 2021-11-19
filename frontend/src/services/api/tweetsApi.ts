import { axios } from "../../core/axios";
import { Tweet, Tweets } from "../../store/ducks/tweets/contracts/state";

export const tweetsApi = {
  async fetchTweets(): Promise<Tweets["items"]> {
    const { data } = await axios.get("http://localhost:8888/tweets");
    return data.tweets;
  },
  async postTweet(tweet: Tweet): Promise<Tweet> {
    const { data } = await axios.post("http://localhost:8888/tweets", tweet);
    return data.tweet;
  },
};
