import React, { Component } from 'react';
// import moment from 'moment';
import lang from '../Languages/langs.json';

import './Countdown.css';

class Countdown extends Component {
  constructor(props){
    super(props);
  }
  render() {

    return (
      <div className="time-wrapper">
        <span className="days">
          <div className="part">1</div>
          <div className="part two">0</div>
          <div>{lang.days.en}</div>
        </span>
        <span className="hours">
          <div className="part">1</div>
          <div className="part two">2</div>
          <div>{lang.hours.en}</div>
        </span>
        <span className="minutes">
          <div className="part">0</div>
          <div className="part two">9</div>
          <div>{lang.minutes.en}</div>
        </span>
        <span className="seconds">
          <div className="part">2</div>
          <div className="part two">3</div>
          <div>{lang.seconds.en}</div>
        </span>
      </div>
    );
  }
}

export default Countdown;
