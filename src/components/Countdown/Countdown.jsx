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

    // add code for when they are onboard

    // add code for expiration

    if(diff.months > 0) {
      diff.days = cruiseTime.diff(now, 'days');
    }

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
    var { days, hours, minutes, seconds } = this.state;

    var displayTimeUnit = (unit, count) => {
      let txtCount = '' + count;
      let arr = txtCount.split('');
      if (arr.length <= 1) arr.unshift('0');

      let digits =  arr.map( (digit, i) => {
        return i === 0 ?
          ( <div className="part">{digit}</div> ) :
          ( <div className="part followup">{digit}</div> )
      });

      return (
        <span className={unit}>
          {digits}
          <div className="units">{lang[unit][language]}</div>
        </span>
      );
    }

    return (
      <div className="time-wrapper">
        {displayTimeUnit('days', days)}
        {displayTimeUnit('hours', hours)}
        {displayTimeUnit('minutes', minutes)}
        {displayTimeUnit('seconds', seconds)}
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
