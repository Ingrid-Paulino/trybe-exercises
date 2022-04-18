import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../pages/Register';
import Gallery from '../pages/Gallery';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Gallery } />
        <Route exact path="/register" component={ Register } />
      </Switch>
    );
  }
}

export default Routes;