import React from "react";

import "./App.scss";
import TwitterIcon from "@material-ui/icons/Twitter";

import { Route, Switch, useHistory } from "react-router-dom";

import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsAuth,
  selectUserLoadingStatus,
} from "./store/ducks/user/selectors";
import { fetchUserData } from "./store/ducks/user/actionCreators";
import { LoadingStatus } from "./store/types";
import { useStyles } from "./pages/Home/theme";

export const App = () => {
  const isAuth = useSelector(selectIsAuth);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const loadingStatus = useSelector(selectUserLoadingStatus);
  const isReady =
    loadingStatus !== LoadingStatus.NEVER &&
    loadingStatus !== LoadingStatus.LOADING;

  React.useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  React.useEffect(() => {
    if (!isAuth && isReady) {
      history.push("/signin");
    } else if (history.location.pathname === "/") {
      history.push("/home");
    } else {
      history.push("/home");
    }
  }, [isAuth, isReady, history]);
  if (!isReady) {
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
