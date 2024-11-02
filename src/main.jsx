

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';
import './styles.css'
import { ChatApp } from './ChatApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <ChatApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)