import React from 'react';

// an example of a class component that has a state 
class Timer extends React.Component {
    constructor(props) {
        // always make a super() call when constructing the component
        // props will then be assigned to this.props
        super(props);
        // the timer component needs to keep track of 3 values
        // start: when it last started
        // time: the current time
        // duration: how long it has been running in total
        this.state = {
            start: new Date(),
            time : 0,
            duration : 0
        };

        // these three functions will be called as callbacks from outside the Timer Component itself. Because "this" in JS implicitely always refers to the 'context' object from where the function is called (rather than the objct where it is defined), the context of these functions needs to be set explicitly to always be the Timer component by invoking .bind() on them.
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
    }

    // One of the lifecycle-methods provided by React.Component to avoid data lecks:
    // makes sure that the timer is cleared when the component gets destroyed
    componentWillUnmount() 
    {
        clearInterval(this.timer);
    }

    // starts a new counting session: the current Time starts being updated every 10ms 
    start() 
    {        
        this.setState({ start: new Date() })
        this.timer = setInterval(() => {
            // this.setState MUST be used to make changes (otherwise, the component won't rerender)
            this.setState({
                time: new Date()
            });
        }, 10);
    }

    // pauses the timer:
    // the timer stops updating and the session runtime since the last start() is added to the total runtime
    stop() 
    {
        clearInterval(this.timer);
        this.setState({ 
            duration : this.state.duration + Date.now() - this.state.start.getTime(),
            start: new Date() 
        });
    }

    // resets the total runtime to 0 and starts a new session
    reset() {
        this.setState({
            start: new Date(),
            duration: 0
        });
    }

    // every call of setState() will cause the component to re-render, hence the updated time will be displayed
    render() {
        // formats the current timer value
        const currentTimer = Date.now() - this.state.start.getTime() + this.state.duration;
        const millis = Math.floor(currentTimer/ 10) % 100;
        const seconds = Math.floor(currentTimer / 1000) % 60;
        const minutes = Math.floor(currentTimer / 60000) % 60;
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${millis.toString().padStart(2, '0')}`;
    return <div className="timer">{display}</div>
    }
}

export default Timer;