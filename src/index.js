import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/App.css"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
