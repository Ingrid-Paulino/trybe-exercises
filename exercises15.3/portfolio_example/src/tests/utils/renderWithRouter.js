import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
// import App from '../../App';

function renderWithRouter(componentToRender) {
  const customHistory = createMemoryHistory();

  //forma 1
  // const renderObject = render(
  //   <Router history={ customHistory }>
  //     { componentToRender }
  //   </Router>,
  // );

  // return {
  //   ...renderObject,
  //   history: customHistory,
  // };


  //forma 2
  

  return {
    ...render(
    <Router history={ customHistory }>
      { componentToRender }
    </Router>,
  ),
  history: customHistory,
  };
}

export default renderWithRouter;