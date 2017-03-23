import React, { Component } from 'react';
import moment from 'moment';
import 'moment-precise-range-plugin';
import lang from '../Languages/langs.json';

import './Countdown.css';

class Countdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      cruiseTime: null
    }
  }

  updateTime = (cT) => {
    let now = moment();
    let cruiseTime = cT ? cT : this.state.cruiseTime
    let diff = moment.preciseDiff(now, cruiseTime, true);
    this.setState({
      diff,
      expired: diff.firstDateWasLater,
      months: diff.months,
      days: diff.days,
      hours: diff.hours,
      minutes: diff.minutes,
      seconds: diff.seconds
    });
  }

  componentWillMount() {
    let cruiseTime = moment(this.props.date, "YYYY-MM-DD HH:mm Z");
    this.updateTime(cruiseTime);
    this.setState({ cruiseTime });
    
    this.timer = setInterval( () => {
      this.updateTime();
    },1000);
  }

  render() {
    const { language } = this.props;
    var { diff, months, days, hours, minutes, seconds } = this.state;

    return (
      <div className="time-wrapper">
        {console.log('Diference: ', diff)}
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
