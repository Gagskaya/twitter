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
import { useDispatch, useSelector } from "react-redux";
import { fetchUserLogin } from "../../../store/ducks/user/actionCreators";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { selectUserLoginLoadingStatus } from "../../../store/ducks/user/selectors";
import { LoadingStatus } from "../../../store/types";

toast.configure();

const schema = yup
  .object({
    email: yup
      .string()
      .email("Неверный формат почты")
      .required("Это поле обязательно"),
    password: yup
      .string()
      .required("Это поле обязательно")
      .min(8, "Слишком короткий пароль.")
      .matches(/[a-zA-Z]/, "Пароль может содержать только латинские буквы"),
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
  const loginLoadingStatus = useSelector(selectUserLoginLoadingStatus);

  const { handleSubmit, control } = useForm<LoginFormProps>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormProps) => {
    dispatch(fetchUserLogin({ email: data.email, password: data.password }));
  };
  React.useEffect(() => {
    if (loginLoadingStatus === LoadingStatus.SUCCESS) {
      toast.success("Авторизация успешна ", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (loginLoadingStatus === LoadingStatus.ERROR) {
      toast.error(
        "Ошибка авторизации. Проверьте пожалуйста правильно ввода e-mail и пароля",
        { position: toast.POSITION.TOP_CENTER }
      );
    }
  }, [loginLoadingStatus]);

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
                label="Пароль"
                variant="filled"
                type="password"
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
          <Button color="primary" onClick={toggleLoginPopup}>
            Назад
          </Button>
          <Button color="primary" type="submit">
            Войти
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
