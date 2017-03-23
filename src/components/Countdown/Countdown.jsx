import React, { Component } from 'react';
import moment from 'moment';
require('moment-precise-range-plugin');
import lang from '../Languages/langs.json';

import './Countdown.css';

class Countdown extends Component {
  constructor(props){
    super(props);
  }

  updateTime = () => {
    let now = moment();
    let cruiseTime = moment(this.props.date, "YYYY-MM-DD HH:mm Z");
    let m = moment.preciseDiff(cruiseTime, now, true);
    this.setState({
      m: m,
      months: m.months,
      days: m.days,
      hours: m.hours,
      minutes: m.minutes,
      seconds: m.seconds
    });
  }

  // componentWillMount() {
  //   this.timer = setInterval( () => {
  //     this.updateTime();
  //   },1000);
  // }
  componentWillMount() {
    this.updateTime();
  }

  render() {
    const { language } = this.props;
    var { m, months, days, hours, minutes, seconds } = this.state;

    return (
      <div className="time-wrapper">
        {console.log('moment': m)}
        days: {days}<br />
        hours: {hours}<br />
        minutes: {minutes}<br />
        seconds: {seconds}<br />
        <span className="days">
          <div className="part">1</div>
          <div className="part two">0</div>
          <div>{lang.days[language]}</div>
        </span>
        <span className="hours">
          <div className="part">1</div>
          <div className="part two">2</div>
          <div>{lang.hours[language]}</div>
        </span>
        <span className="minutes">
          <div className="part">0</div>
          <div className="part two">9</div>
          <div>{lang.minutes[language]}</div>
        </span>
        <span className="seconds">
          <div className="part">2</div>
          <div className="part two">3</div>
          <div>{lang.seconds[language]}</div>
        </span>
      </div>
    );
  }
}

Countdown.propTypes = {
	date: React.PropTypes.string,
	// handleCancel: React.PropTypes.func,
	// revision: React.PropTypes.object,
	// annotationId: React.PropTypes.string,
};

export default Countdown;
