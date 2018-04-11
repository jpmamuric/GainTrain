import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/main.scss';
import App from './react/components/app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
