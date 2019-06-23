import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

interface IProps {
  size?: number;
}

const ProgressIndicator = ({ size = 24 }: IProps) => {
  return <CircularProgress size={size} />;
};

export default ProgressIndicator;
