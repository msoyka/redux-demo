import { IUserProfile } from '../models';
export const PROFILE_LOGIN = 'profile/PROFILE_LOGIN';

export interface ProfileLoginAction {
    type: typeof PROFILE_LOGIN;
    payload: IUserProfile;
}

export function loginProfile(profile: IUserProfile): ProfileLoginAction {
    return {
        type: PROFILE_LOGIN,
        payload: profile,
    };
}
