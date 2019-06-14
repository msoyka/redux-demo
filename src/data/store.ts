import { createStore } from 'redux';
import rootReducer from './ducks';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialRootState } from './ducks';

const store = createStore(rootReducer, initialRootState, composeWithDevTools());

export default store;
