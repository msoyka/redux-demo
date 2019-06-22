import { createSelector } from 'reselect';
import { IRootState } from 'data/rootReducer';
import { IState as IProfileState } from 'data/profile';

export const getProfileState = (state: IRootState): IProfileState => state.profile;

export const getProfile = createSelector([getProfileState], (profileState: IProfileState) => {
  return profileState.data;
});

export const getProfileLoading = createSelector([getProfileState], (profileState: IProfileState) => {
  return profileState.loading;
});

export const getProfileError = createSelector([getProfileState], (profileState: IProfileState) => {
  return profileState.error;
});