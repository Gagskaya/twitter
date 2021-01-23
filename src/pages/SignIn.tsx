import React from "react";

import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { SearchOutlined } from "@material-ui/icons";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    height: "calc(100vh - 84px)",
  },
  blueSide: {
    backgroundColor: "#71C9F8",
    flexBasis: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  blueSideBgIcon: {
    position: "absolute",
    left: "76%",
    top: "53%",
    transform: "translate(-50%,-50%)",
    width: "250%",
    height: "200%",
  },
  blueSideList: {
    position: "relative",
    width: 380,
    "& h6": {
      color: "white",
      fontSize: 20,
      marginLeft: 20,
    },
    "& li": {
      display: "flex",
      alignItems: "center",
      marginBottom: 35,
    },
  },
  blueSideListIcon: {
    fontSize: 32,
    color: "white",
  },
  loginSide: {
    flexBasis: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    marginBottom: 50,
    marginTop: 20,
    fontWeight: 700,
    fontSize: 30,
  },
  loginSideSubtitle: {
    marginBottom: 15,
    fontWeight: 700,
    fontSize: 15,
  },
  loginSideSingUp: {
    marginBottom: 10,
  },
  signInPopupTwitterIcon: {
    position: "relative",
    left: 173,
    fontSize: 50,
  },
  signInPopupTitle: {
    display: "flex",
    justifyContent: "center",
  },
  signUpClosePopupIcon: {
    marginRight: "20px",
    cursor: "pointer",
    color: "#33A5FF",
  },
  signUpPopupHeader: {
    padding: 24,
    display: "flex",
    alignItems: "center",
  },
}));
export const SignIn = () => {
  const classes = useStyles();
  const [signInPopup, setSignInPopup] = React.useState(false);
  const [signUpPopup, setSignUpPopup] = React.useState(false);

  const openSignInPopup = () => {
    setSignInPopup(true);
  };

  const closeSignInPopup = () => {
    setSignInPopup(false);
  };
  const openSignUpPopup = () => {
    setSignUpPopup(true);
  };

  const closeSignUpPopup = () => {
    setSignUpPopup(false);
  };
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
            onClick={openSignUpPopup}
            className={classes.loginSideSingUp}
          >
            Зарегистрироваться
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={openSignInPopup}
          >
            Войти
          </Button>
          <Dialog
            open={signInPopup}
            onClose={closeSignInPopup}
            aria-labelledby="form-dialog-title"
          >
            <TwitterIcon
              color="primary"
              className={classes.signInPopupTwitterIcon}
            />
            <DialogTitle
              id="form-dialog-title"
              className={classes.signInPopupTitle}
            >
              Войти в твиттер
            </DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                label="E-Mail"
                type="email"
                variant="filled"
                fullWidth
                style={{ marginBottom: "10px" }}
              />
              <TextField
                autoFocus
                label="Пароль"
                type="password"
                variant="filled"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={closeSignInPopup} color="primary">
                Назад
              </Button>
              <Button onClick={closeSignInPopup} color="primary">
                Войти
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={signUpPopup}
            onClose={closeSignUpPopup}
            aria-labelledby="form-dialog-title"
          >
            <div className={classes.signUpPopupHeader}>
              <CloseIcon
                className={classes.signUpClosePopupIcon}
                onClick={closeSignUpPopup}
              />
              <Typography variant="h6" component="h6">
                Создайте учетную запись
              </Typography>
            </div>

            <DialogContent>
              <TextField
                autoFocus
                label="Имя"
                variant="filled"
                fullWidth
                style={{ margin: "5px 0 30px 0" }}
              />
              <TextField autoFocus label="E-mail" variant="filled" fullWidth />
              <TextField
                autoFocus
                label="Пароль"
                type="password"
                variant="filled"
                fullWidth
                style={{ margin: "30px 0 30px 0" }}
              />
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" fullWidth>
                Далее
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </section>
    </div>
  );
};
