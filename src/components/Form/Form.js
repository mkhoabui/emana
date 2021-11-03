import React from 'react';
import Answer from '../Answer/Answer';
import Question from '../Question/Question';
import { nanoid } from 'nanoid';

function Form(props) {
    const answerList = props.quotes.map(quote => (
        <Answer movie={quote.movie} id={"answer-" + nanoid()} />
    ));
    const randomQuote = props.quotes[Math.floor(Math.random() * 4)];

    return (
        <form>
            <Question randomQuote={randomQuote.quote} />
            {answerList}
        </form>
    );
}

export default Form;