import React from "react";

import "./App.scss";
import TwitterIcon from "@material-ui/icons/Twitter";

import { Route, Switch, useHistory } from "react-router-dom";

import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserLoadingStatus,
  selectUserLoginLoadingStatus,
  selectUserRegisterLoadingStatus,
} from "./store/ducks/user/selectors";
import { fetchUserData } from "./store/ducks/user/actionCreators";
import { LoadingStatus } from "./store/types";
import { useStyles } from "./pages/Home/theme";

export const App = () => {
  const token = localStorage.getItem("token");
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const loadingStatus = useSelector(selectUserLoadingStatus);
  const registerLoadingStatus = useSelector(selectUserRegisterLoadingStatus);
  const loginLoadingStatus = useSelector(selectUserLoginLoadingStatus);

  React.useEffect(() => {
    if (token) {
      dispatch(fetchUserData());
    }
  }, [dispatch, token]);
  React.useEffect(() => {
    if (!token) {
      history.push("/signin");
    } else {
      history.push("/home");
    }
  }, [history, token]);

  if (
    loadingStatus === LoadingStatus.LOADING ||
    registerLoadingStatus === LoadingStatus.LOADING ||
    loginLoadingStatus === LoadingStatus.LOADING
  ) {
    return (
      <div className={classes.centered}>
        <TwitterIcon color="primary" style={{ width: 80, height: 80 }} />
      </div>
    );
  }

  return (
    <div>
      <Switch>
        <Route path="/signin" component={SignIn} exact />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
};
