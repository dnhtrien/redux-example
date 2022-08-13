import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/reducers/index';
import App from '../src/App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer);
store.subscribe(() => console.log('sate', store.getState()));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);

reportWebVitals();
