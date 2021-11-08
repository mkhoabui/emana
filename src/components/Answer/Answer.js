function Answer(props) {
    const handleChange = () => {
        props.onChange();
    };

    return (
        <div className="form-check">
            <input className="form-check-input" type="radio" name="movie" id={props.id} onChange={handleChange} value={props.movie} />
            <label className="form-check-label" htmlFor={props.id}>
                {props.movie}
            </label>
        </div>
    );
}

export default Answer;