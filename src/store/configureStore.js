import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import postsReducer from '../reducers/posts';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }) || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      posts: postsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};