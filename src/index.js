import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './images/star.png';
import './images/starfav.png';
import './index.css';
import App from './App/App.js';
import * as serviceWorker from './serviceWorker';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)


ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
