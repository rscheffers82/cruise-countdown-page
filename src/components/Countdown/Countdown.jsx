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
          <div>{lang.days.en}</div>
          <div className="part">1</div>
          <div className="part two">0</div>
        </span>
        <span className="hours">
          <div>{lang.hours.en}</div>
          <div className="part">1</div>
          <div className="part two">2</div>
        </span>
        <span className="minutes">
          <div>{lang.minutes.en}</div>
          <div className="part">0</div>
          <div className="part two">9</div>
        </span>
        <span className="seconds">
          <div>{lang.seconds.en}</div>
          <div className="part">2</div>
          <div className="part two">3</div>
        </span>
      </div>
    );
  }
}

export default Countdown;
