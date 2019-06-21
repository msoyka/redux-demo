import { createStore, applyMiddleware, Middleware, Store } from 'redux';
import rootReducer from './ducks';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { initialRootState } from './ducks';

const middlewareStack: Middleware[] = [thunk];

const store: Store = createStore(
  rootReducer,
  initialRootState,
  composeWithDevTools(applyMiddleware(...middlewareStack)),
);

export default store;
