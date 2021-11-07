import React from "react";
import Form from "../Form/Form";
import Score from "../Score/Score";
import Reward from '../Reward/Reward'
import { getQuotes } from '../../functions';

class Main extends React.Component {
    constructor(props) {
        super(props);

        const quotes = getQuotes();
        const randomQuote = quotes[Math.floor(Math.random() * 4)];

        this.state = {
            countCorrect: 0,
            countQuestion: 1,
            quotes: quotes,
            randomQuote: randomQuote,
            shouldHide: true
        };

        this.incrementCountCorrect = this.incrementCountCorrect.bind(this);
        this.incrementCountQuestion = this.incrementCountQuestion.bind(this);
    }

    incrementCountCorrect() {
        this.setState({ countCorrect: this.state.countCorrect + 1 }, () => {
            console.log(this.state.countCorrect);
            if (this.state.countCorrect % 1 === 0) {
                this.setState({ shouldHide: false });
            }
        });

    }

    incrementCountQuestion() {
        const quotes = getQuotes();
        const randomQuote = quotes[Math.floor(Math.random() * 4)];

        this.setState({
            countQuestion: this.state.countQuestion + 1,
            quotes: quotes,
            randomQuote: randomQuote,
            shouldHide: true
        });

    }

    render() {
        return (
            <>
                <Form quotes={this.state.quotes}
                    randomQuote={this.state.randomQuote}
                    incrementCountCorrect={this.incrementCountCorrect}
                    incrementCountQuestion={this.incrementCountQuestion} />
                <Score countCorrect={this.state.countCorrect}
                    countQuestion={this.state.countQuestion} />
                <Reward countCorrect={this.state.countCorrect}
                    shouldHide={this.state.shouldHide} />
            </>
        );
    }
}

export default Main;