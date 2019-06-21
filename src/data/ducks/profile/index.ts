import { AxiosError } from 'axios';
import { IProfile } from 'common/api-models';
import * as ProfileActions from './actions';

// Profile Inital State Model
export interface IState {
  data: IProfile | null;
  loading: boolean;
  error: AxiosError | boolean;
}

// Profile Initial State
export const initialState: IState = {
  data: null,
  loading: false,
  error: false,
};

// NOTE: Add action types
type IActionTypes =
  | ProfileActions.IProfileLoginActionSuccess
  | ProfileActions.IProfileLoginActionStarted
  | ProfileActions.IProfileLoginActionFinished
  | ProfileActions.IProfileLoginActionError
  | ProfileActions.IProfileLogoutAction;

// Reducer
const profileReducer = (state = initialState, action: IActionTypes) => {
  switch (action.type) {
    case ProfileActions.PROFILE_LOGIN_STARTED:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ProfileActions.PROFILE_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case ProfileActions.PROFILE_LOGIN_FINISHED:
      return {
        ...state,
        loading: false,
      };
    case ProfileActions.PROFILE_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ProfileActions.PROFILE_LOGOUT:
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};

export default profileReducer;
