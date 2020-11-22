import Lottie from 'react-lottie';
import './App.css';

function ControlButton(props) {

    //animation options
    const options = {
        loop: true,
        autoplay: false,
        animationData: props.animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    // render animation if animation data is present
    if (props.animationData) {
        return(
            <div className="animated-container">
                <Lottie options={options}
                        height={80}
                        width={80}
                        isStopped={props.isStopped}
                        isPaused={false}
                        isClickToPauseDisabled={true}/>
                <div className="button-outer">
                    <div className="button go" 
                        onClick={props.onClick}>
                            <span className="button-label">{props.label}</span>
                    </div>
                </div>
            </div>
            );
    } else {
     // otherwise just render button   
        return <div className="button reset" 
                    onClick={props.onClick}>
                        <span className="button-label">{props.label}</span>
                </div>;
    }
}

export default ControlButton;