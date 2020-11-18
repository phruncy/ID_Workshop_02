import React from 'react';

// an example of a class component that has a state 
class Timer extends React.Component {
    constructor(props) {
        // always make a super() call when constructing the component
        // props will then be assigned to this.props
        super(props);
        // the initial state is set in the constructor
        // everything the component needs to keep track of by itself is a property of the state-object
        this.state = {
            start: new Date(),
            time : 0,
            duration : 0
        };
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
    }

    // this is just to avoid data lecks:
    // make sure that the timer is cleared when the component gets destroyed
    componentWillUnmount() 
    {
        clearInterval(this.timer);
    }

    start() 
    {        
        this.timer = setInterval(() => {
            // this.setState MUST be used to make changes (otherwise, the component won't rerender)
            this.setState({
                time: new Date()
            });
        }, 10);
    }

    stop() 
    {
        clearInterval(this.timer);
        this.setState({ 
            duration : this.state.duration + Date.now() - this.state.start.getTime(),
            start: new Date() 
        });
    }

    reset() {
        this.setState({
            start: new Date(),
            duration: 0
        });
    }

    // render returns the JSX that describes the look of the component
    render() {
        const currentTimer = Date.now() - this.state.start.getTime() + this.state.duration;
        const millis = Math.floor(currentTimer/ 10) % 100;
        const seconds = Math.floor(currentTimer / 1000) % 60;
        const minutes = Math.floor(currentTimer / 60000) % 60;
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${millis.toString().padStart(2, '0')}`;
    return <div className="timer">{display}</div>
    }
}

export default Timer;