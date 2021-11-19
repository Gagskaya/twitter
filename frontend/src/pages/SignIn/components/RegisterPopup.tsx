import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/Close";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, TextField, Typography } from "@material-ui/core";
import { useStyles } from "../theme";
import { useForm, Controller } from "react-hook-form";
import { fetchUserRegister } from "../../../store/ducks/user/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { selectUserRegisterLoadingStatus } from "../../../store/ducks/user/selectors";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingStatus } from "../../../store/types";
import { RegisterFormProps } from "../../../store/ducks/user/contracts/state";

const schema = yup
  .object({
    username: yup.string().required("Это поле обязательно"),
    fullname: yup.string().required("Это поле обязательно"),
    email: yup
      .string()
      .email("Неверный формат почты")
      .required("Это поле обязательно"),
    password: yup
      .string()
      .required("Это поле обязательно")
      .min(8, "Пароль слишком короткий. Минимум 8 символов")
      .matches(/[a-zA-Z]/, "Пароль может содержать только латинские буквы"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
      .required("Это поле обязательно"),
  })
  .required();
toast.configure();

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
  const dispatch = useDispatch();
  const registerLoadingStatus = useSelector(selectUserRegisterLoadingStatus);
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: RegisterFormProps) => {
    const user = {
      username: data.username,
      email: data.email,
      fullname: data.fullname,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    dispatch(fetchUserRegister(user));
  };
  React.useEffect(() => {
    if (registerLoadingStatus === LoadingStatus.SUCCESS) {
      toast.success("Регистрация успешна. Войдите", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (registerLoadingStatus === LoadingStatus.ERROR) {
      toast.error(
        "Пользователь с таким e-mail или логином уже существует. Попробуйте заново",
        { position: toast.POSITION.TOP_CENTER }
      );
    }
  }, [registerLoadingStatus]);
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
            name="username"
            control={control}
            defaultValue=""
            rules={{ required: "Требуется логин" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={{ marginBottom: "10px" }}
                label="Логин"
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
            name="fullname"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={{ marginBottom: "10px" }}
                label="Полное имя"
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
                label="Пароль"
                variant="filled"
                value={value}
                type="password"
                fullWidth
                autoFocus
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                style={{ marginBottom: "10px" }}
                label="Подтвердите пароль"
                type="password"
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
          <Button variant="contained" color="primary" fullWidth type="submit">
            Далее
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
