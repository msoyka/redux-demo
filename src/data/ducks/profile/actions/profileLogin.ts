import IUserProfile from '../models/userProfile';

export const PROFILE_LOGIN = 'profile/PROFILE_LOGIN';

export interface IProfileLoginAction {
  type: typeof PROFILE_LOGIN;
  payload: IUserProfile;
}

export const loginProfileAction = (profile: IUserProfile): IProfileLoginAction => ({
  type: PROFILE_LOGIN,
  payload: profile,
});

export default loginProfileAction;
