import { PROFILE_LOGIN, ProfileLoginAction } from './actions/profileLogin';
import { PROFILE_LOGOUT, ProfileLogoutAction } from './actions/profileLogout';
import { IUserProfile } from './models';

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

type ProfileActionTypes = ProfileLoginAction | ProfileLogoutAction;

export default function profileReducer(state = initialState, action: ProfileActionTypes): IState {
    switch (action.type) {
        case PROFILE_LOGIN:
            return {
                ...state,
                data: action.payload,
            };
        case PROFILE_LOGOUT:
            return {
                ...state,
                data: null,
            };
        default:
            return state;
    }
}
