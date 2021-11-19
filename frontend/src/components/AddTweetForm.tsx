import React from "react";

import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import MediaIcon from "@material-ui/icons/PermMedia";
import SmileIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Avatar, Button, IconButton } from "@material-ui/core";
import { useStyles } from "../pages/Home/theme";
import { useDispatch } from "react-redux";
import { fetchPostTweet } from "../store/ducks/tweets/actionCreators";

interface AddTweetFormProps {
  classes: ReturnType<typeof useStyles>;
}
export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
}: AddTweetFormProps): React.ReactElement => {
  const [text, setText] = React.useState<string>("");
  const MAX_LENGTH = 280;
  const textLimitPercent = (text.length / MAX_LENGTH) * 100;
  const textCount = MAX_LENGTH - text.length;
  const dispatch = useDispatch();

  const onAddTweet = () => {
    dispatch(fetchPostTweet({ text }));
    setText("");
  };
  const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };
  return (
    <div className={classes.addTweetForm}>
      <div>
        <Avatar
          alt={`Аватарка пользователя `}
          src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div className={classes.addTweetFormWrap}>
        <TextareaAutosize
          placeholder="Что происходит?"
          className={classes.addTweetFormTextArea}
          onChange={handleChangeTextArea}
          value={text}
          rowsMax={15}
          name="text"
        />
        <div className={classes.addTweetFormFooter}>
          <div className={classes.addTweetFormFooterWrap}>
            <div>
              <IconButton>
                <MediaIcon color="primary" />
              </IconButton>
              <IconButton>
                <SmileIcon color="primary" />
              </IconButton>
            </div>

            <div style={{ display: "flex" }}>
              <div className={classes.addFormBottomRight}>
                <span style={{ marginRight: 10 }}>
                  {text.length >= 260 && textCount}
                </span>

                <div className={classes.addFormCircleProgress}>
                  <CircularProgress
                    variant="determinate"
                    size={20}
                    thickness={4}
                    value={textLimitPercent > 100 ? 100 : textLimitPercent}
                    style={
                      text.length > 280
                        ? { color: "red" }
                        : { color: "rgb(29, 161, 242)" } && text.length > 260
                        ? { color: "rgb(214,184,17)" }
                        : { color: "rgb(29, 161, 242)" }
                    }
                  />
                  <CircularProgress
                    style={{ color: "rgba(0,0,0,0.1)", position: "absolute" }}
                    variant="determinate"
                    size={20}
                    thickness={4}
                    value={100}
                  />
                </div>
              </div>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                disabled={textLimitPercent > 100 || textLimitPercent === 0}
                onClick={onAddTweet}
              >
                Твитнуть
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
