import React from 'react';
import { render } from 'react-dom';

import ReduxProvider from 'ReduxProvider';
import IntlProvider from 'IntlProvider';
import Login from 'pages/Login';

import { addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';

addLocaleData(locale_en);

render(
  <ReduxProvider>
    <IntlProvider>
      <Login />
    </IntlProvider>
  </ReduxProvider>,
  document.getElementById('root'),
);
