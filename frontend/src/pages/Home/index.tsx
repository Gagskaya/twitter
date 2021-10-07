import React from "react";

import { Container, Grid, Paper, Typography } from "@material-ui/core";

import { Tweet } from "../../components/Tweet";
import { SideMenu } from "../../components/SideMenu";
import { AddTweetForm } from "../../components/AddTweetForm";
import { RightSideMenu } from "../../components/RightSideMenu";
import { useStyles } from "./theme";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../../store/ducks/tweets/actionCreators";
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from "../../store/ducks/tweets/selectors";
import CircularProgress from "@material-ui/core/CircularProgress";
import { selectUser } from "../../store/ducks/user/selectors";

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);
  const user = useSelector(selectUser);
  console.log(user);
  React.useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper variant="outlined" className={classes.tweetsWrapper}>
            <Paper className={classes.tweetsHeaderTitleWrap} variant="outlined">
              <Typography className={classes.tweetsHeaderTitle} variant="h6">
                Главная
              </Typography>
            </Paper>
            <AddTweetForm classes={classes} />
            {isLoading ? (
              <div className={classes.tweetsCentered}>
                <CircularProgress />
              </div>
            ) : (
              tweets?.map((tweet) => (
                <Tweet
                  key={tweet._id}
                  classes={classes}
                  user={tweet.user}
                  text={tweet.text}
                />
              ))
            )}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <RightSideMenu classes={classes} />
        </Grid>
      </Grid>
    </Container>
  );
};
