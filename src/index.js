import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import './assets/sass/main.scss';
import App from './react/components/app/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './redux/reducers/index';

const store = createStore(
  reducers,
  composeWithDevTools()
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
