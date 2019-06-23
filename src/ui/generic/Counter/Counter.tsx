import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

const Counter = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        You clicked {count} times
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        data-testid="counter"
        onClick={handleClick}
      >
        {count}
      </Button>
    </div>
  );
};

export default Counter;
