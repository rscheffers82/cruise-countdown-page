import React, { Component } from 'react';
// import logo from './images/logo.svg';

import Languages from './components/Languages/Languages';
import DisplayTime from './components/Countdown/Countdown';
import lang from './components/Languages/langs.json';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lang: 'en'
    }
  }

  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> */}
        <p className="App-intro">
          <h1>{lang.timerHeading.en}</h1>
          <div className="cruise"></div>
        </p>
        <Languages />
        <DisplayTime />
      </div>
    );
  }
}

export default App;

// boilerplate details - https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet
// cruise - https://www.carnival.com/cruise-ships/carnival-splendor.aspx
