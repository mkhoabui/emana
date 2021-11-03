import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Form from './components/Form/Form';

const movieQuote = require("popular-movie-quotes");
const numQuotes = 4;
const quotes = movieQuote.getSomeRandom(1);
const movies = [quotes[0].movie];

for (let i = 0; i < numQuotes - 1; i++) {
  let nextQuote = movieQuote.getSomeRandom(1);
  while (movies.includes(nextQuote[0].movie)) {
    nextQuote = movieQuote.getSomeRandom(1);
  }
  quotes.push(nextQuote[0]);
  movies.push(nextQuote[0].movie);
}

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Form quotes={quotes} />
  </React.StrictMode>,
  document.getElementById('root')
);