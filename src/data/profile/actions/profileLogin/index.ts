import { Dispatch } from 'redux';
import axios, { AxiosResponse, AxiosError } from 'axios';

import API_CONFIG from 'api/api-config';
import IProfile from 'common/api-models/IProfile';

// Action Types
export const PROFILE_LOGIN_STARTED = 'profile/PROFILE_LOGIN_STARTED';
export const PROFILE_LOGIN_ERROR = 'profile/PROFILE_LOGIN_ERROR';
export const PROFILE_LOGIN_SUCCESS = 'profile/PROFILE_LOGIN_SUCCESS';
export const PROFILE_LOGIN_FINISHED = 'profile/PROFILE_LOGIN_FINISHED';

// Action Creator Models
export interface IProfileLoginActionStarted {
  type: typeof PROFILE_LOGIN_STARTED;
}

export interface IProfileLoginActionFinished {
  type: typeof PROFILE_LOGIN_FINISHED;
}

export interface IProfileLoginActionError {
  type: typeof PROFILE_LOGIN_ERROR;
  payload: AxiosError;
}

export interface IProfileLoginActionSuccess {
  type: typeof PROFILE_LOGIN_SUCCESS;
  payload: IProfile;
}

// Action Creators
export const profileLoginActionStarted = (): IProfileLoginActionStarted => ({
  type: PROFILE_LOGIN_STARTED,
});

export const profileLoginActionFinished = (): IProfileLoginActionFinished => ({
  type: PROFILE_LOGIN_FINISHED,
});

export const profileLoginActionError = (error: AxiosError): IProfileLoginActionError => ({
  type: PROFILE_LOGIN_ERROR,
  payload: error,
});

export const profileLoginActionSuccess = (profile: IProfile): IProfileLoginActionSuccess => ({
  type: PROFILE_LOGIN_SUCCESS,
  payload: profile,
});

// Async Thunk Action Creators
export const loginProfileAction = () => {
  return (dispatch: Dispatch) => {
    // Signal dispatch start
    dispatch(profileLoginActionStarted());
    // Make API Request
    axios
      .get(API_CONFIG.PROFILE.GET)
      .then((res: AxiosResponse) => {
        dispatch(profileLoginActionSuccess(res.data));
      })
      .catch((error: AxiosError) => {
        return dispatch(profileLoginActionError(error));
      })
      .finally(() => dispatch(profileLoginActionFinished()));
  };
};

export default loginProfileAction;
