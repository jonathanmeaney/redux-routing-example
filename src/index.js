import React from 'react';
import { render } from 'react-dom';
import configureStore, { history } from './store/configureStore';
import AppRoot from './components/app-root';
import './styles.css';

const store = configureStore();

render(
  <AppRoot store={store} history={history} />,
  document.getElementById('root')
);