import React from 'react';

function Answer(props) {
    const handleChange = () => {
        props.onChange();
    };

    return (
        <div>
            <input type="radio" name="movie" id={props.id} onChange={handleChange} />
            <label for={props.id}>{props.movie}</label>
        </div>
    );
}

export default Answer;