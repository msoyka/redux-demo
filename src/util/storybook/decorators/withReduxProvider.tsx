import React from 'react';
import ReduxProvider from 'ReduxProvider';

const withReduxProvider = (story: any) => {
  return <ReduxProvider>{story()}</ReduxProvider>;
};

export default withReduxProvider;
