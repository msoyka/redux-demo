import { createStore, applyMiddleware, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer, { initialRootState } from './rootReducer';

const middlewareStack: Middleware[] = [thunk];

const store: Store = createStore(
  rootReducer,
  initialRootState,
  composeWithDevTools(applyMiddleware(...middlewareStack)),
);

export default store;
