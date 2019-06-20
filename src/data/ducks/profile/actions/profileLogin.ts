import IUserProfile from '../models/userProfile';
import mockProfileFetch from '../mockApi';
import { Dispatch } from 'redux';

// Action Types
export const PROFILE_LOGIN_STARTED = 'profile/PROFILE_LOGIN_STARTED';
export const PROFILE_LOGIN_ERROR = 'profile/PROFILE_LOGIN_ERROR';
export const PROFILE_LOGIN_SUCCESS = 'profile/PROFILE_LOGIN_SUCCESS';
export const PROFILE_LOGIN_FINISHED = 'profile/PROFILE_LOGIN_FINISHED';

// Models
export interface IProfileLoginActionStarted {
  type: typeof PROFILE_LOGIN_STARTED;
}

export interface IProfileLoginActionFinished {
  type: typeof PROFILE_LOGIN_FINISHED;
}

export interface IProfileLoginActionError {
  type: typeof PROFILE_LOGIN_ERROR;
  payload: string | boolean;
}

export interface IProfileLoginActionSuccess {
  type: typeof PROFILE_LOGIN_SUCCESS;
  payload: IUserProfile;
}

// Simple Actions
export const profileLoginActionStarted = (): IProfileLoginActionStarted => ({
  type: PROFILE_LOGIN_STARTED,
});

export const profileLoginActionFinished = (): IProfileLoginActionFinished => ({
  type: PROFILE_LOGIN_FINISHED,
});

export const profileLoginActionError = (errorMessage: string | boolean): IProfileLoginActionError => ({
  type: PROFILE_LOGIN_ERROR,
  payload: errorMessage,
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
        dispatch(profileLoginActionSuccess(res));
      })
      .catch((err: any) => {
        dispatch(profileLoginActionError(err));
      })
      .finally(() => dispatch(profileLoginActionFinished()));
  };
};

export default loginProfileAction;
