import {createStore, applyMiddleware, compose} from 'redux';
import genreReducer from '../reducers/genreReducer'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(
    genreReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
}
