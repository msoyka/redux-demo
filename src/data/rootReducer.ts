import { combineReducers } from 'redux';
import profileReducer, { IState as IProfileState, initialState as initialProfileState } from './profile';

export interface IRootState {
  profile: IProfileState;
}

export const initialRootState: IRootState = {
  profile: initialProfileState,
};

const rootReducer = combineReducers({
  profile: profileReducer,
});

export default rootReducer;
