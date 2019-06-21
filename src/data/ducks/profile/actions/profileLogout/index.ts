// Action Types
export const PROFILE_LOGOUT = 'profile/PROFILE_LOGOUT';

// Action Creator Models
export interface IProfileLogoutAction {
  type: typeof PROFILE_LOGOUT;
}

// Action Creators
export const logoutProfileAction = (): IProfileLogoutAction => ({
  type: PROFILE_LOGOUT,
});

export default logoutProfileAction;
