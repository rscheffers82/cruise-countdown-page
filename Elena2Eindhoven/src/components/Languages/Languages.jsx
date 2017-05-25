import React, { Component } from 'react';

import './Languages.css';

class Languages extends Component {

  onClick = (language, e) => {
    e.preventDefault();
    this.props.handleClick(language);
  }

  render() {
    return (
      <div className="flags-container">
        <div className="flag english" onClick={this.onClick.bind(this, 'en')}></div>
        <div className="flag german" onClick={this.onClick.bind(this, 'de')}></div>
        <div className="flag serbian" onClick={this.onClick.bind(this, 'rs')}></div>
      </div>
    );
  }
}

Languages.propTypes = {
	handleClick: React.PropTypes.func
};

export default Languages;
