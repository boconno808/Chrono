import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {IntlProvider} from "react-intl";
import * as serviceWorker from './serviceWorker';
import locales from './locales';

// Change this value to change language
const locale = 'en';
const messages = locales[`${locale}`];

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
  <App />
  </IntlProvider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
