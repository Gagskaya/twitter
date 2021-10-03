import React from "react";
import * as yup from "yup";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TwitterIcon from "@material-ui/icons/Twitter";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useStyles } from "../theme";
import { Button, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { LoginFormProps } from "../../../store/ducks/user/contracts/state";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import {
  fetchUserData,
  fetchUserSignIn,
} from "../../../store/ducks/user/actionCreators";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("This field is required"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  })
  .required();

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
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: LoginFormProps) => {
    dispatch(fetchUserSignIn({ email: data.email, password: data.password }));
    dispatch(fetchUserData());
  };

  return (
    <Dialog
      open={loginPopup}
      onClose={toggleLoginPopup}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <TwitterIcon
          color="primary"
          className={classes.loginPopupTwitterIcon}
        />
        <DialogTitle id="form-dialog-title" className={classes.loginPopupTitle}>
          Войти в твиттер
        </DialogTitle>
        <DialogContent>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={{ marginBottom: "10px" }}
                label="E-mail"
                variant="filled"
                value={value}
                fullWidth
                autoFocus
                error={!!error}
                helperText={error ? error.message : null}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={{ marginBottom: "10px" }}
                label="Password"
                variant="filled"
                value={value}
                fullWidth
                autoFocus
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary">Назад</Button>
          <Button color="primary" type="submit">
            Войти
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
