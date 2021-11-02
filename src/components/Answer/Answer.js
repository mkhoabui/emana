import React from 'react';

function Answer(props) {
    return (
        <div>
            <input type="radio" name="movie" />
            <label>{props.movie}</label>
        </div>
    );
}

export default Answer;