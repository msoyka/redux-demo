import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { IRootState } from 'data/rootReducer';
import { IState as IProfileState } from 'data/profile';
import { loginProfileAction, logoutProfileAction } from 'data/profile/actions';
import ProgressIndicator from 'ui/generic/ProgressIndicator';
import {
  getProfile,
  getProfileLoading,
  getProfileError,
} from 'data/profile/selectors';

interface IStoreProps {
  profileError: IProfileState['error'];
  profile: IProfileState['data'];
  profileLoading: IProfileState['loading'];
}

interface IDispatchProps {
  loginProfile: typeof loginProfileAction;
  logoutProfile: typeof logoutProfileAction;
}

type ICombinedProps = IStoreProps & IDispatchProps;

const ProfileAuth = ({
  profileLoading,
  profile,
  profileError,
  loginProfile,
  logoutProfile,
}: ICombinedProps) => {
  return (
    <ButtonGroup
      variant="contained"
      color="secondary"
      size="large"
      aria-label="Large contained secondary button group"
    >
      <Button
        disabled={profile !== null || profileLoading}
        variant="contained"
        color="primary"
        onClick={loginProfile}
      >
        {profileLoading && <ProgressIndicator />}
        {profileError && 'Error: '}
        Login
      </Button>
      <Button
        disabled={!profile || profileLoading}
        variant="contained"
        color="secondary"
        onClick={logoutProfile}
      >
        Logout
      </Button>
    </ButtonGroup>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    profile: getProfile(state),
    profileLoading: getProfileLoading(state),
    profileError: getProfileError(state),
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
