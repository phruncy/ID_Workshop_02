/* The top-level component of the component */

import React from 'react';
import Timer from './Timer'
import ControlButton from './ControlButton'
import spinningAnimationData from './assets/spinning.json';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props)
        // React.createRef() creates a reference that can be set to a specific instance of a React component in order to get access to that component's functions and properties (in this case <Timer/>)
        // To set the reference and to use it, it needs to be passed into a coponent Tag in the render function
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

    // 
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
