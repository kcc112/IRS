import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../store/store';
import { IrsApp } from '../components/app';
import { useGlobalStyles } from './styles';

export function App() {
  useGlobalStyles();
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.REACT_APP_BASEURL}>
        <IrsApp />
      </BrowserRouter>
    </Provider>
  );
}