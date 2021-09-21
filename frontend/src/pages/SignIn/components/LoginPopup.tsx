import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TwitterIcon from "@material-ui/icons/Twitter";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useStyles } from "../theme";
import { Button, TextField } from "@material-ui/core";

interface LoginPopupProps {
  classes: ReturnType<typeof useStyles>;
  loginPopup: boolean;
  toggleLoginPopup: () => void;
}
export const LoginPopup: React.FC<LoginPopupProps> = ({
  classes,
  loginPopup,
  toggleLoginPopup,
}: LoginPopupProps) => {
  return (
    <Dialog
      open={loginPopup}
      onClose={toggleLoginPopup}
      aria-labelledby="form-dialog-title"
    >
      <TwitterIcon color="primary" className={classes.loginPopupTwitterIcon} />
      <DialogTitle id="form-dialog-title" className={classes.loginPopupTitle}>
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
        <Button color="primary" onClick={toggleLoginPopup}>
          Назад
        </Button>
        <Button color="primary" onClick={toggleLoginPopup}>
          Войти
        </Button>
      </DialogActions>
    </Dialog>
  );
};
