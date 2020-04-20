import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const enhancers = [
  applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true }),
  ),
];

const composeEnhancers = compose;

const enhancer = composeEnhancers(...enhancers);

const store = createStore(reducers, {}, enhancer);

export default store;
