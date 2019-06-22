import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Login from 'pages/Login';
import store from 'data/store';

render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById('root'),
);