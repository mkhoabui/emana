import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Form from './components/Form/Form';

const movieQuote = require("popular-movie-quotes");
const quotes = movieQuote.getSomeRandom(4);

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Form quotes={quotes} />
  </React.StrictMode>,
  document.getElementById('root')
);