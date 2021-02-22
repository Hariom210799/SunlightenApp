import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route component={ErrorPage} />
  </Switch>
);

export default Main;
