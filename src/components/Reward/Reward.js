function Reward(props) {
    return (
        <div className={props.shouldHide ? 'hidden' : undefined}>
            <p>Congratulations on reaching {props.countCorrect} correct answers</p>
        </div>
    );
}

export default Reward;