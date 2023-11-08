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
        <h1>Host IP</h1>
        <h4>15.223.22.110</h4>
        <Clock timeZone="America/New_York"></Clock>
      </header>
    </div>
  );
}

export default App;
