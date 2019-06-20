import { IUserProfile } from './models/index';
import * as ProfileActions from './actions';

export interface IState {
  data?: IUserProfile | null;
  loading: boolean;
  error?: boolean | string;
}

export const initialState: IState = {
  data: null,
  loading: false,
  error: false,
};

type IActionTypes = any;

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
