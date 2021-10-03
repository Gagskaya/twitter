import React from "react";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, TextField, Typography } from "@material-ui/core";
import { useStyles } from "../theme";
import { useForm, Controller } from "react-hook-form";

const schema = yup
  .object({
    username: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("This field is required"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    password2: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("This field is required"),
  })
  .required();

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
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    axios.post("http://localhost:8888/auth/register", {
      username: data.username,
      email: data.email,
      password: data.password,
      password2: data.password2,
    });
  };
  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      open={registerPopup}
      onClose={toggleRegisterPopup}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{ required: "Username is requied" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={{ marginBottom: "10px" }}
                label="Username"
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
          <Controller
            name="password2"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={{ marginBottom: "10px" }}
                label="Confirm password"
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
          <Button
            variant="contained"
            color="primary"
            fullWidth
            // onClick={toggleRegisterPopup}
            type="submit"
          >
            Далее
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
