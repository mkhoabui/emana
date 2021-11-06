import React from "react";
import Form from "../Form/Form";
import Score from "../Score/Score";

const getQuotes = () => {
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

class Main extends React.Component {
    constructor(props) {
        super(props);

        const quotes = getQuotes();
        const randomQuote = quotes[Math.floor(Math.random() * 4)];

        this.state = {
            countCorrect: 0,
            countQuestion: 1,
            quotes: quotes,
            randomQuote: randomQuote
        };

        this.incrementCountCorrect = this.incrementCountCorrect.bind(this);
        this.incrementCountQuestion = this.incrementCountQuestion.bind(this);
    }

    incrementCountCorrect() {
        this.setState({ countCorrect: this.state.countCorrect + 1 });
    }

    incrementCountQuestion() {
        const quotes = getQuotes();
        const randomQuote = quotes[Math.floor(Math.random() * 4)];

        this.setState({
            countQuestion: this.state.countQuestion + 1,
            quotes: quotes,
            randomQuote: randomQuote
        });

    }

    render() {
        return (
            <>
                <Form quotes={this.state.quotes}
                    randomQuote={this.state.randomQuote}
                    incrementCountCorrect={this.incrementCountCorrect}
                    incrementCountQuestion={this.incrementCountQuestion} />
                <Score countCorrect={this.state.countCorrect} countQuestion={this.state.countQuestion} />
            </>
        );
    }
}

export default Main;