import React from 'react';
import { Provider } from 'react-redux';
import store from 'data/store';

interface IProps {
  children: React.ReactNode;
}

const ReduxProvider = ({ children }: IProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
