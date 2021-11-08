import React from "react";
import Form from "../Form/Form";
import Score from "../Score/Score";
import { getQuotes } from '../../functions';
import { getRewardImageSrc } from '../../functions';

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
            shouldHide: true,
            rewardImageSrc: ''
        };

        this.incrementCountCorrect = this.incrementCountCorrect.bind(this);
        this.incrementCountQuestion = this.incrementCountQuestion.bind(this);
    }

    incrementCountCorrect() {
        this.setState({ countCorrect: this.state.countCorrect + 1 }, () => {
            if (this.state.countCorrect % 5 === 0) {
                // showing reward image from api call
                (async () => {
                    const rewardImageSrc = await getRewardImageSrc();
                    this.setState({
                        shouldHide: false,
                        rewardImageSrc: rewardImageSrc
                    });
                })();
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
                    incrementCountQuestion={this.incrementCountQuestion}
                    countCorrect={this.state.countCorrect}
                    shouldHide={this.state.shouldHide}
                    rewardImageSrc={this.state.rewardImageSrc} />
                <Score countCorrect={this.state.countCorrect}
                    countQuestion={this.state.countQuestion} />
            </>
        );
    }
}

export default Main;