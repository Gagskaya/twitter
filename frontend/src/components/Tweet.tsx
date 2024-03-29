import React from "react";

import { IconButton, Paper, Typography } from "@material-ui/core";
import TweetComment from "@material-ui/icons/ChatBubbleOutlineOutlined";
import TweetRepost from "@material-ui/icons/RepeatOutlined";
import TweetLike from "@material-ui/icons/FavoriteBorderOutlined";
import TweetShare from "@material-ui/icons/PublishOutlined";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";

import { useStyles } from "../pages/Home/theme";
import { useSelector } from "react-redux";
import { selectUserData } from "../store/ducks/user/selectors";

interface TweetProps {
  classes: ReturnType<typeof useStyles>;
  text: string;
}
export const Tweet: React.FC<TweetProps> = ({ classes, text }: TweetProps) => {
  const user = useSelector(selectUserData);

  return (
    <Paper
      variant="outlined"
      className={classNames(classes.tweetsHeader, classes.tweets)}
    >
      <div style={{ display: "flex" }}>
        <div>
          <Avatar alt={`Аватарка пользователя `} />
        </div>

        <div style={{ marginLeft: "10px" }}>
          <b>{user?.fullname}</b>{" "}
          <span className={classes.tweetsUserName}>@{user?.username}</span>
          <Typography
            variant="body1"
            gutterBottom
            className={classes.tweetsText}
          >
            {text}
          </Typography>
        </div>
      </div>

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
    </Paper>
  );
};
