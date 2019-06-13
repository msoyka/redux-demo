export const PROFILE_LOGOUT = 'profile/PROFILE_LOGOUT';

export interface ProfileLogoutAction {
    type: typeof PROFILE_LOGOUT;
}

export function logoutProfile(): ProfileLogoutAction {
    console.log('Logout Profile');
    return {
        type: PROFILE_LOGOUT,
    };
}
