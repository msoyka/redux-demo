import { IUserProfile } from './models/index';
import * as ProfileActions from './actions';

export interface IState {
  data: null | IUserProfile;
  loading: boolean;
  error: null | string | boolean;
}

export const initialState: IState = {
  data: null,
  loading: false,
  error: null,
};

type IActionTypes = any;

const profileReducer = (state = initialState, action: IActionTypes) => {
  switch (action.type) {
    case ProfileActions.PROFILE_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false,
      };
    case ProfileActions.PROFILE_LOGIN_STARTED:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ProfileActions.PROFILE_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
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
