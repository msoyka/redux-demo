import { combineReducers } from 'redux';
import profileReducer, { IState as IProfileState, initialState as profileInitialState } from './profile';

export interface IRootState {
    profile: IProfileState;
}

export const initialRootState: IRootState = {
    profile: profileInitialState,
};

const rootReducer = combineReducers({
    profile: profileReducer,
});

export default rootReducer;
