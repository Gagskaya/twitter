import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";

import { Button, TextField, Typography } from "@material-ui/core";
import { useStyles } from "../theme";

interface RegisterPopupProps {
  classes: ReturnType<typeof useStyles>;
  registerPopup: boolean;
  toggleRegisterPopup: () => void;
}
export const RegisterPopup: React.FC<RegisterPopupProps> = ({
  registerPopup,
  classes,
  toggleRegisterPopup,
}: RegisterPopupProps) => {
  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      open={registerPopup}
      onClose={toggleRegisterPopup}
    >
      <div className={classes.registerPopupHeader}>
        <CloseIcon
          className={classes.registerClosePopupIcon}
          onClick={toggleRegisterPopup}
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
        <TextField
          autoFocus
          label="Подтвердите пароль"
          type="password"
          variant="filled"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={toggleRegisterPopup}
        >
          Далее
        </Button>
      </DialogActions>
    </Dialog>
  );
};
