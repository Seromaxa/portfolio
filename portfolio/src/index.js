import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/mainstyle.sass'
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReduser from './store/redusers/rootReducer'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReduser)

ReactDOM.render(
  <React.StrictMode>
    <Provider  store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
