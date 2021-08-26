import React from "react";

import { Button, TextField, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { SearchOutlined } from "@material-ui/icons";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "../SignIn/theme";

export const SignIn = () => {
  const classes = useStyles();
  const [signInPopup, setSignInPopup] = React.useState<boolean>(false);
  const [signUpPopup, setSignUpPopup] = React.useState<boolean>(false);
  const toggleSignInPopup = () => {
    setSignInPopup(!signInPopup);
  };
  const toggleSignUpPopup = () => {
    setSignUpPopup(!signUpPopup);
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
            onClick={toggleSignUpPopup}
            className={classes.loginSideSingUp}
          >
            Зарегистрироваться
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={toggleSignInPopup}
          >
            Войти
          </Button>
          <Dialog
            open={signInPopup}
            onClose={toggleSignInPopup}
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
              <Button onClick={toggleSignInPopup} color="primary">
                Назад
              </Button>
              <Button onClick={toggleSignInPopup} color="primary">
                Войти
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={signUpPopup}
            onClose={toggleSignUpPopup}
            aria-labelledby="form-dialog-title"
          >
            <div className={classes.signUpPopupHeader}>
              <CloseIcon
                className={classes.signUpClosePopupIcon}
                onClick={toggleSignUpPopup}
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
