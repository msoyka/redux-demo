import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing(0.5),
    },
  }),
);

interface IProps {
  message: string;
}

const ErrorSnackbar = ({message}: IProps) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClose(event: React.SyntheticEvent | React.MouseEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{message}.</span>}
      action={[
        <IconButton key="close" aria-label="Close" color="inherit" className={classes.close} onClick={handleClose}>
          <CloseIcon />
        </IconButton>,
      ]}
    />
  );
};

export default ErrorSnackbar;
