import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IState as IProfileState } from './redux/ducks/profile';
import * as ProfileActions from './redux/ducks/profile/actions';
import { IUserProfile } from './redux/ducks/profile/models/userProfile';

interface IProps {}

type IStoreProps = IProfileState;

interface IDispatchProps {
  login: typeof ProfileActions.loginProfileAction;
  logout: typeof ProfileActions.logoutProfileAction;
}

type ICombinedProps = IProps & IStoreProps & IDispatchProps;

const Button = ({ loading, data, error, login, logout }: ICombinedProps) => {
  const handleLoginDave = () => {
    const profile = {
      username: 'dsmith',
      firstName: 'David',
      lastName: 'Smith',
      avatarURL: 'https://picsum.photos/200/300?random=1',
    };
    login(profile);
  };

  const handleLoginMatt = () => {
    const profile = {
      username: 'msoyka',
      firstName: 'Matthew',
      lastName: 'Soyka',
      avatarURL: 'https://picsum.photos/200/300?random=1',
    };
    login(profile);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {loading && <p>Is Loading</p>}
      {error && <p>Is error</p>}
      {data && <p>Welcome {data.firstName}!</p>}
      <button onClick={handleLoginMatt}>Login Matt</button>
      <button onClick={handleLoginDave}>Login Dave</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

const mapStateToProps = (state: any) => {
  const { loading, data, error } = state.profile;
  return { loading, data, error };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    login: (profile: IUserProfile) => dispatch(ProfileActions.loginProfileAction(profile)),
    logout: () => dispatch(ProfileActions.logoutProfileAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);
