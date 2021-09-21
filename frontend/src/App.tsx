import "./App.scss";

import { Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";

export const App = () => {
  return (
    <div>
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/signin" component={SignIn} exact />)
      </Switch>
    </div>
  );
};
