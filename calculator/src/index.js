import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import CalculatorReducer from '../src/Reducers/CalculatorReducer';
import {configureStore} from '@reduxjs/toolkit';
const store=configureStore({reducer:CalculatorReducer})

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);


