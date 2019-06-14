export const PROFILE_LOGOUT = 'profile/PROFILE_LOGOUT';

export interface IProfileLogoutAction {
  type: typeof PROFILE_LOGOUT;
}

export const logoutProfileAction = (): IProfileLogoutAction => ({
  type: PROFILE_LOGOUT,
});

export default logoutProfileAction;
