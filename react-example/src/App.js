import React from 'react';
import Timer from './Timer'
import ControlButton from './ControlButton'
import spinningAnimationData from './assets/spinning.json';
import './App.css';



class App extends React.Component {

    constructor(props) {
        super(props)
        this.timer = React.createRef();
        this.toggle = this.toggle.bind(this);
        this.restart = this.restart.bind(this);
        this.state = {
            isRunning: false
        }
    }

    toggle() {
        if (this.state.isRunning) {
            this.timer.current.stop();
        } else {
            this.timer.current.start();
        }
        this.setState({isRunning: !this.state.isRunning});
    }

    restart() {
        this.timer.current.reset();
    }

    render() {
        return <div className="frame">
            <Timer ref={this.timer} />
            <div className="button-row">
                <ControlButton 
                    onClick={this.toggle} 
                    label={this.state.isRunning ? "Stop" : "Go"} 
                    isStopped={!this.state.isRunning} 
                    animationData={spinningAnimationData}/>
                <ControlButton 
                    onClick={this.restart} 
                    label={this.state.isRunning ? "restart" : "delete"}/>
            </div>
        </div>;
    }
}

export default App;
