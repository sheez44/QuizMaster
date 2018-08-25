import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Quiz from "./Quiz";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Quiz} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
