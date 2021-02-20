import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Landingpage';
import Maps from './Maps';
import Manual from './Manual';


const Main = () => (
    <Switch>
        {/* <Route exact path="/" component= {LandingPage} /> */}
        <Route exact path="/manual" component= {Manual} />
        <Route path="/maps" component= {Maps} />             
    </Switch>
)

export default Main;
