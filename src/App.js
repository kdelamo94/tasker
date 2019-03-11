import React, { Component } from 'react';
import TaskBoard from './site-structure/TaskBoard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskBoard  />
      </div>
    );
  }
}

export default App;
