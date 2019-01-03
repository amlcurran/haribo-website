import React, { Component } from 'react';
import './App.css';
import HariboList from './HariboList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HariboList />
        </header>
      </div>
    );
  }
}

export default App;
