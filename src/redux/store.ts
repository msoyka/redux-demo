import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialRootState } from './reducers';

const store = createStore(rootReducer, initialRootState, composeWithDevTools());

export default store;
