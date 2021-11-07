function Reward(props) {
    return (
        <div className={props.shouldHide ? 'hidden' : undefined}>
            <p>Congratulations on reaching {props.countCorrect} correct answers. Here's a reward:</p>
            <img src={props.rewardImageSrc} alt="reward" />
        </div>
    );
}

export default Reward;