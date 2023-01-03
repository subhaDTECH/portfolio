import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import {store} from "./store.js"
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
   
    <BrowserRouter>
    <Provider  store={store}>
      <App />
      </Provider>
    </BrowserRouter>
    
   
    
  </React.StrictMode>,
  document.getElementById('root')
);

