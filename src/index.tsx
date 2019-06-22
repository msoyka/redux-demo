import React from 'react';
import { render } from 'react-dom';

import ReduxProvider from 'ReduxProvider';
import Login from 'pages/Login';

render(
  <ReduxProvider>
    <Login />
  </ReduxProvider>,
  document.getElementById('root'),
);
