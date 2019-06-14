import { IUserProfile } from './models/index';
import * as ProfileActions from './actions';

export interface IState {
  data: null | IUserProfile;
  loading: boolean;
  error: null | string;
}

export const initialState: IState = {
  data: {
    username: 'msoyka',
    firstName: 'Matthew',
    lastName: 'Soyka',
    avatarURL: 'https://picsum.photos/200/300?random=1',
  },
  loading: false,
  error: null,
};

type IActionTypes = ProfileActions.IProfileLoginAction | ProfileActions.IProfileLogoutAction;

const profileReducer = (state = initialState, action: IActionTypes) => {
  switch (action.type) {
    case ProfileActions.PROFILE_LOGIN:
      return {
        ...state,
        data: action.payload,
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
