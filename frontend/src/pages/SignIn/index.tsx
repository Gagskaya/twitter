import React from "react";

import TwitterIcon from "@material-ui/icons/Twitter";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";

import { Button, Typography } from "@material-ui/core";
import { useStyles } from "../SignIn/theme";
import { SearchOutlined } from "@material-ui/icons";

import { RegisterPopup } from "./components/RegisterPopup";
import { LoginPopup } from "./components/LoginPopup";

export const SignIn = () => {
  const [loginPopup, setLoginPopup] = React.useState<boolean>(false);
  const [registerPopup, setRegisterPopup] = React.useState<boolean>(false);
  const toggleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };
  const toggleRegisterPopup = () => {
    setRegisterPopup(!registerPopup);
  };
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBgIcon} />

        <ul className={classes.blueSideList}>
          <li>
            <SearchOutlined className={classes.blueSideListIcon} />
            <Typography variant="h6">
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li>
            <PeopleOutlineIcon className={classes.blueSideListIcon} />{" "}
            <Typography variant="h6">Узнайте, о чем говорят в мире.</Typography>
          </li>
          <li>
            <ChatBubbleOutlineOutlinedIcon
              className={classes.blueSideListIcon}
            />
            <Typography variant="h6">Присоединяйтесь к общению.</Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color="primary"
            className={classes.loginSideTwitterIcon}
          />
          <Typography variant="h4" className={classes.loginSideTitle}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography className={classes.loginSideSubtitle}>
            Присоединяйтесь к Твиттеру прямо сейчас!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={toggleRegisterPopup}
            className={classes.loginSideSingUp}
          >
            Зарегистрироваться
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={toggleLoginPopup}
          >
            Войти
          </Button>
          <RegisterPopup
            registerPopup={registerPopup}
            classes={classes}
            toggleRegisterPopup={toggleRegisterPopup}
          />
          <LoginPopup
            classes={classes}
            toggleLoginPopup={toggleLoginPopup}
            loginPopup={loginPopup}
          />
        </div>
      </section>
    </div>
  );
};
