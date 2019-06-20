import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { IState as IProfileState } from './data/ducks/profile';
import { loginProfileAction, logoutProfileAction } from './data/ducks/profile/actions';
import { IUserProfile } from './data/ducks/profile/models/userProfile';

interface IProps {}

type IStoreProps = IProfileState;

interface IDispatchProps {
  login: typeof loginProfileAction;
  logout: typeof logoutProfileAction;
}

type ICombinedProps = IProps & IStoreProps & IDispatchProps;

// const ProfileCard = ({ username, firstName, lastName }: IUserProfile) => (
//   <div>
//     <h2>User Profile Info</h2>
//     <h3>{username}</h3>
//     <p>{`${firstName} ${lastName}`}</p>
//   </div>
// );

const Button = ({ loading, data, error, login, logout }: ICombinedProps) => {
  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };
  console.log('data:', data);
  return (
    <>
      {loading && <p>Is Loading</p>}
      {error && <p>Is error</p>}
      {data && <p>Profile Loaded</p>}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
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
)(Button);
