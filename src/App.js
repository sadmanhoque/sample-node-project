import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Clock from './Components/Clock.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h4>15.223.22.110</h4>
        <Clock timeZone="America/New_York"></Clock>
      </header>
    </div>
  );
}

export default App;
