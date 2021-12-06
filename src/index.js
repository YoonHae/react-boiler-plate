import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'antd/dist/antd.css';
import { applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux';
import promiseMiddleware from 'redux-promise';   // store 로 action 전달시 promiss형태로 가능하게
import ReduxThunk from 'redux-thunk';  // store 로 action 전달시 function 형태로 가능하게
import Reducer from './_reducers';
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

//Provider=> Redux 와 application 을 연결시키는 부분
ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStoreWithMiddleware(Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
