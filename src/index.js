import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import { Provider } from 'react-redux'
import store from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop/>
       <Provider store={store}>
         <App />
       </Provider>
    </HashRouter>
  </React.StrictMode>
);