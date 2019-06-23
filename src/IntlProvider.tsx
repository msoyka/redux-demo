import React from 'react';
import {
  IntlProvider as ReactIntProvider,
  // IntlConfig
} from 'react-intl';

const mockIntlMessages = {
  'app.title': 'Welcome to UNFI',
};

interface IProps {
  children: React.ReactNode;
}

// type ICombinedProps = IntlConfig & IProps;

const IntlProvider = ({ children }: IProps) => {
  return (
    <ReactIntProvider locale="en" key="en" messages={mockIntlMessages}>
      {children}
    </ReactIntProvider>
  );
};

export default IntlProvider;
