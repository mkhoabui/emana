export const getQuotes = () => {
    const movieQuote = require("popular-movie-quotes");
    const numQuotes = 4;
    const quotes = movieQuote.getSomeRandom(1);
    const movies = [quotes[0].movie];
    //prevent quotes from same movie
    for (let i = 0; i < numQuotes - 1; i++) {
        let nextQuote = movieQuote.getSomeRandom(1);
        while (movies.includes(nextQuote[0].movie)) {
            nextQuote = movieQuote.getSomeRandom(1);
        }
        quotes.push(nextQuote[0]);
        movies.push(nextQuote[0].movie);
    }
    return quotes;
};

export const getRewardImageSrc = async () => {
    const response = await fetch('http://shibe.online/api/shibes');
    const json = await response.json();
    const arr = JSON.parse(json);
    console.log(arr[0]);
    return arr[0];
};

getRewardImageSrc();

