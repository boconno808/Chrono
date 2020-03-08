import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TranslationMenu from './TranslationMenu';
import * as serviceWorker from './serviceWorker';

// Change this value to change language


ReactDOM.render(
  <TranslationMenu/>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
