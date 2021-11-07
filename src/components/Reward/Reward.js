import { getRewardImageSrc } from '../../functions';

function Reward(props) {
    const rewardImageSrc = getRewardImageSrc();
    return (
        <div className={props.shouldHide ? 'hidden' : undefined}>
            <p>Congratulations on reaching {props.countCorrect} correct answers</p>
            <img src={rewardImageSrc} alt="reward"></img>
        </div>
    );
}

export default Reward;