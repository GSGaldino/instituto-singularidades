
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import createStore from "./createStore";
import {history} from './_config/history';

import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-MRL9KJ7'
}

TagManager.initialize(tagManagerArgs)
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
