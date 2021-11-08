function Score(props) {
    return (
        <div className="score"><span className="correct">{props.countCorrect}</span>/{props.countQuestion}</div>
    );
}

export default Score;