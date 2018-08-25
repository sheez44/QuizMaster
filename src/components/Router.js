import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Quiz from "./Quiz";
import Login from "./Login";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Quiz} />
      <Route component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Router;
