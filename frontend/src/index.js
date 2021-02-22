import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';





//contains all data stored in the program = state, reducers passed to store
const store = configureStore();
//let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  //store is passed as a prop to the provider.  It gives the components access to the store.
  <Provider store={store}>
  <Router>
   <App />
   </Router>
 </Provider>,
 //html displayed on page
  document.getElementById('root')
);
