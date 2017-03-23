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
      language: 'en'
    }
  }

  handleClick = (language) => {
    this.setState({ language });
  }

  render() {
    const { language } = this.state;
    return (
      <div className="App">
        <div className="App-intro">
          <h1>{lang.timerHeading[language]}</h1>
          <div className="cruise"></div>
        </div>
        <Languages handleClick={this.handleClick}/>
        {/*
          Provide the time in the following format "yyyy-mm-dd hh:mm 0000"
          for example: "2017-03-25 4:30 +0100" +0100 in this case is the timezone UTC +1
        */}
        <DisplayTime date={'2017-07-26 12:30 -0500'} language={language}/>
      </div>
    );
  }
}

export default App;

// boilerplate details - https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet
// cruise - https://www.carnival.com/cruise-ships/carnival-splendor.aspx
