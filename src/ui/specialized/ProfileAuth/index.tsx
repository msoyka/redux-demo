import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { IRootState } from 'data/rootReducer';
import { IState as IProfileState } from 'data/profile';
import { loginProfileAction, logoutProfileAction } from 'data/profile/actions';
import ProfileCard from 'ui/specialized/ProfileCard';
import ProgressIndicator from 'ui/generic/ProgressIndicator';
import ErrorSnackbar from 'ui/generic/ErrorSnackbar';
import {getProfile, getProfileLoading, getProfileError} from 'data/profile/selectors'

interface IStoreProps {
  profileError: IProfileState["error"],
  profile: IProfileState["data"],
  profileLoading: IProfileState["loading"]
}

interface IDispatchProps {
  loginProfile: typeof loginProfileAction;
  logoutProfile: typeof logoutProfileAction;
}

type ICombinedProps = IStoreProps & IDispatchProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

const ProfileAuth = ({ profileLoading, profile, profileError, loginProfile, logoutProfile }: ICombinedProps) => {
  const classes = useStyles();

  return (
    <>
      {profileLoading && <ProgressIndicator />}
      {profileError && <ErrorSnackbar message={profileError.message} />}
      {profile && <ProfileCard profile={profile} />}

      <div>
        <Button disabled={profile !== null} variant="contained" color="primary" className={classes.button} onClick={loginProfile}>
          Login
        </Button>
        <Button disabled={!profile} variant="contained" color="secondary" className={classes.button} onClick={logoutProfile}>
          Logout
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = (state: IRootState) => {
  return { 
    profile:  getProfile(state),
    profileLoading: getProfileLoading(state),
    profileError: getProfileError(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      loginProfile: loginProfileAction,
      logoutProfile: logoutProfileAction,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileAuth);
