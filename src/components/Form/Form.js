import React from 'react';
import Answer from '../Answer/Answer';
import Question from '../Question/Question';
import { nanoid } from 'nanoid';

// function Form(props) {
//     const answerList = props.quotes.map(quote => (
//         <Answer movie={quote.movie} id={"answer-" + nanoid()} />
//     ));
//     const randomQuote = props.quotes[Math.floor(Math.random() * 4)];

//     return (
//         <form>
//             <Question randomQuote={randomQuote.quote} />
//             {answerList}
//             <button>Submit Answer</button>
//         </form>
//     );
// }

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shouldHide: true };
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState({ shouldHide: false });
    }

    render() {
        const answerList = this.props.quotes.map(quote => (
            <Answer movie={quote.movie} id={"answer-" + nanoid()} onChange={this.onChange}  />
        ));

        return (
            <form>
                <Question randomQuote={this.props.randomQuote.quote} />
                {answerList}
                <button className={this.state.shouldHide ? 'hidden' : undefined}>Submit Answer</button>
            </form>
        );
    }
}

export default Form;