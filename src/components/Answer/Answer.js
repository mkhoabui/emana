function Answer(props) {
    const handleChange = () => {
        props.onChange();
    };

    return (
        <div>
            <input type="radio" name="movie" id={props.id} onChange={handleChange} value={props.movie} />
            <label htmlFor={props.id}>{props.movie}</label>
        </div>
    );
}

export default Answer;