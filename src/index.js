import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);