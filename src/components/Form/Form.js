import React from 'react';
import Answer from '../Answer/Answer';
import Question from '../Question/Question';
import Reward from '../Reward/Reward';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shouldHide: true };
        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onChange() {
        this.setState({ shouldHide: false });
    }

    handleClick(e) {
        e.preventDefault();
        if (e.target.id === 'submit') {
            if (document.querySelector('input:checked').value === this.props.randomQuote.movie) {
                this.props.incrementCountCorrect();
            }

            this.setState({ shouldHide: true });

            document.querySelectorAll('input').forEach(input => {
                input.disabled = true;
            });

        } else if (e.target.id === 'next') {
            document.querySelectorAll('input').forEach(input => {
                input.disabled = false;
                input.checked = false;
            });
            this.props.incrementCountQuestion();
        }
    }



    render() {
        const answerList = this.props.quotes.map((quote, index) => {
            return <Answer movie={quote.movie} id={"answer-" + index} onChange={this.onChange}
                key={"answer-" + index} />
        });

        return (
            <form>
                <fieldset>
                    <Question randomQuote={this.props.randomQuote.quote} />
                    {answerList}
                </fieldset>
                <Reward countCorrect={this.props.countCorrect}
                    shouldHide={this.props.shouldHide}
                    rewardImageSrc={this.props.rewardImageSrc} />
                <button className={this.state.shouldHide ? 'hidden' : 'btn btn-primary'}
                    onClick={this.handleClick}
                    id="submit"
                    type="button">Submit Answer</button>
                <button className={this.state.shouldHide ? 'btn btn-primary' : 'hidden'}
                    onClick={this.handleClick}
                    id="next">Next Question</button>
            </form>
        );
    }
}

export default Form;