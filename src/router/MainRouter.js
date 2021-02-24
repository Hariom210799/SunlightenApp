import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MapIndia from "../pages/MapIndia";
import ErrorPage from "../pages/ErrorPage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/mapofindia" component={MapIndia} />
    <Route component={ErrorPage} />
  </Switch>
);

export default Main;
