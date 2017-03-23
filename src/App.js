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
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> */}
        <div className="App-intro">
          <h1>{lang.timerHeading[language]}</h1>
          <div className="cruise"></div>
        </div>
        <Languages handleClick={this.handleClick}/>
        {/* moment("2017-03-25 4:30 +0000", "YYYY-MM-DD HH:mm Z"); */}
        <DisplayTime date={'2017-03-27 4:30 -0500'} language={language}/>
      </div>
    );
  }
}

export default App;

// boilerplate details - https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet
// cruise - https://www.carnival.com/cruise-ships/carnival-splendor.aspx
