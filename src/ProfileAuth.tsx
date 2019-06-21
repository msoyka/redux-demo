import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { IState as IProfileState } from './data/ducks/profile';
import { loginProfileAction, logoutProfileAction } from './data/ducks/profile/actions';
import ProfileCard from './ProfileCard';
import ProgressIndicator from './ProgressIndicator';
import ErrorSnackbar from './ErrorSnackbar';

type IStoreProps = IProfileState;

interface IDispatchProps {
  login: typeof loginProfileAction;
  logout: typeof logoutProfileAction;
}

type ICombinedProps = IStoreProps & IDispatchProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

const ProfileAuth = ({ loading, data, error, login, logout }: ICombinedProps) => {
  const classes = useStyles();

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };
  console.log('data:', data);
  return (
    <>
      {loading && <ProgressIndicator />}
      {error && <ErrorSnackbar />}
      {data && <ProfileCard profile={data} />}

      <div>
        <Button variant="contained" color="primary" className={classes.button} onClick={handleLogin}>
          Login
        </Button>

        <Button disabled variant="contained" color="secondary" className={classes.button} onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  const { loading, data, error } = state.profile;
  return { loading, data, error };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      login: loginProfileAction,
      logout: logoutProfileAction,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileAuth);
