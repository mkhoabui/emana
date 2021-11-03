import React from 'react';

function Answer(props) {
    return (
        <div>
            <input type="radio" name="movie" id={props.id} />
            <label for={props.id}>{props.movie}</label>
        </div>
    );
}

export default Answer;