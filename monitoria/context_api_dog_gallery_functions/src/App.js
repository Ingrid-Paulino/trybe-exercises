import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './services/Routes';
import Provider from './context/Provider';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;