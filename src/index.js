import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'
import { LoadingProvider } from '../src/context/LoadingProvider'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoadingProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </Provider>
  </LoadingProvider>
);
