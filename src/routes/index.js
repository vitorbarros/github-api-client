import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import UserDetails from '../pages/UserDetails';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/user-details/:username" component={UserDetails} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}