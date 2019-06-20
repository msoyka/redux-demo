import IUserProfile from '../models/userProfile';
import mockProfileFetch from '../mockApi';
import { Dispatch } from 'redux';

// Action Types
export const PROFILE_LOGIN_SUCCESS = 'profile/PROFILE_LOGIN_SUCCESS';
export const PROFILE_LOGIN_ERROR = 'profile/PROFILE_LOGIN_ERROR';
export const PROFILE_LOGIN_STARTED = 'profile/PROFILE_LOGIN_STARTED';

// Models
export interface IProfileLoginActionStarted {
  type: typeof PROFILE_LOGIN_STARTED;
}

export interface IProfileLoginActionError {
  type: typeof PROFILE_LOGIN_ERROR;
}

export interface IProfileLoginActionSuccess {
  type: typeof PROFILE_LOGIN_SUCCESS;
  payload: IUserProfile;
}

// Simple Actions
export const profileLoginActionStarted = (): IProfileLoginActionStarted => ({
  type: PROFILE_LOGIN_STARTED,
});

export const profileLoginActionError = (): IProfileLoginActionError => ({
  type: PROFILE_LOGIN_ERROR,
});

export const profileLoginActionSuccess = (profile: IUserProfile): IProfileLoginActionSuccess => ({
  type: PROFILE_LOGIN_SUCCESS,
  payload: profile,
});

// Async Thunk Actions
export const loginProfileAction = () => {
  return (dispatch: Dispatch) => {
    dispatch(profileLoginActionStarted());

    mockProfileFetch()
      .then((res: any) => {
        console.log('res data: ', res.data);
        dispatch(profileLoginActionSuccess(res.data));
      })
      .catch((err: any) => {
        console.log('error:', err.message);
        dispatch(profileLoginActionError());
      });
  };
};

export default loginProfileAction;
