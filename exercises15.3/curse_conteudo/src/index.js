import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  // Coloque aqui o browserRouter
  <BrowserRouter> {/*não funciona no testing-library por isso usamos o renderWithRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

