/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Routes from './containers/Routes';
import filterReducer from './reducers/filter';

// const store = createStore(
//   filterReducer,
//   compose(applyMiddleware(thunk)),
// );

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Routes />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
