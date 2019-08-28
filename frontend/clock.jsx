import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: this.printTime() };

    // this.printTime();

    // this.printTime = this.printTime.bind(this);
  }

  printTime() {
    // Format the time in HH:MM:SS
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const timeString = [hours, minutes, seconds].join(":");
    return timeString;
  }

  _tick() {
    this.setState({ time: this.printTime() });
  }

  componentDidMount() {
    this.setId = setInterval(this._tick.bind(this), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.setId);
  }

  render() {
    return (
      <div className="clock">
        <h2>The time is ticking...</h2>
        
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}

export default Clock;