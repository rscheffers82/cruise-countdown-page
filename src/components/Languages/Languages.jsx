import React, { Component } from 'react';
// import moment from 'moment';
import lang from './langs.json';

import './Languages.css';

class Languages extends Component {
  constructor(props){
    super(props);
  }

  onClick = (language, e) => {
    e.preventDefault();
    this.props.handleClick(language);
  }

  render() {


    return (
      <div className="flags-container">
        <div className="flag english" onClick={this.onClick.bind(this, 'en')}></div>
        <div className="flag german" onClick={this.onClick.bind(this, 'de')}></div>
      </div>
    );
  }
}

export default Languages;
