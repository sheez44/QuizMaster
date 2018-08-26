import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Login";
import Quiz from "./Quiz";
import PostQuiz from "./PostQuiz"

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Quiz} />
      <Route exact path="/postquiz" component={PostQuiz} />
      <Route component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Router;
