import React, { Component } from 'react';
import './App.scss';
import {Navbar} from './Components/Navbar'
import {Home} from './Components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Home/>
      </div>
    );
  }
}

export default App;
