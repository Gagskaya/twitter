import React from "react";

import { Grid, IconButton, Paper, Typography } from "@material-ui/core";
import TweetComment from "@material-ui/icons/ChatBubbleOutlineOutlined";
import TweetRepost from "@material-ui/icons/RepeatOutlined";
import TweetLike from "@material-ui/icons/FavoriteBorderOutlined";
import TweetShare from "@material-ui/icons/PublishOutlined";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";
import { useStyles } from "../pages/Home";
interface TweetProps {
  classes: ReturnType<typeof useStyles>;
  user: {
    fullName: string;
    userName: string;
    avatar: string;
  };
  text: string;
}
export const Tweet: React.FC<TweetProps> = ({
  classes,
  user,
  text,
}: TweetProps) => {
  return (
    <Paper
      variant="outlined"
      className={classNames(classes.tweetsHeader, classes.tweets)}
    >
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Avatar
            alt={`Аватарка пользователя ${user.userName}`}
            src={user.avatar}
          />
        </Grid>
        <Grid item xs={11}>
          <b>{user.fullName}</b>{" "}
          <span className={classes.tweetsUserName}>{user.userName}</span>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.tweetsText}
          >
            {text}
          </Typography>
          <div className={classes.tweetsFooter}>
            <div>
              <IconButton>
                <TweetComment />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <TweetRepost />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <TweetLike />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <TweetShare />
              </IconButton>
              <span>1</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};
