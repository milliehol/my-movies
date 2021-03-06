import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk';

//allows you to use devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
}
