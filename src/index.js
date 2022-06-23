import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store'
import { LoadingProvider } from '../src/context/LoadingProvider'
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));
const clientId="243286079203-c38qnk1bm3rero1ogdpk2chnbhehn643.apps.googleusercontent.com"
//const clientId = "597507392876-c941fph1dbiikn70madcsgfpunpbmlnn.apps.googleusercontent.com"
//const clientId=  "39336608773-ttq6cf0bsq3ns1g1acsb3nq6a4cu50ac.apps.googleusercontent.com"
root.render(
  <GoogleOAuthProvider GoogleOAuthProvider clientId={clientId} >
    <LoadingProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App></App>
        </BrowserRouter>
      </Provider>
    </LoadingProvider>
  </GoogleOAuthProvider>
);
