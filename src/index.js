import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import Router from './client/router/index.js';
import store from './client/store/index.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
