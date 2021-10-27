//services/Routes
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Store from '../pages/Store';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/store" component={ Store } />
      </Switch>
    );
  }
}

export default Routes;