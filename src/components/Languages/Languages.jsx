import React, { Component } from 'react';
// import moment from 'moment';
import lang from './langs.json';

import './Languages.css';

class Languages extends Component {
  constructor(props){
    super(props);
  }
  render() {

    return (
      <div className="flags-container">
        <div className="flag english"></div>
        <div className="flag german"></div>
      </div>
    );
  }
}

export default Languages;
