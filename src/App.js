import React, { Component } from 'react';
import './App.scss';
import {Navbar} from './Components/Navbar'
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import routes from './Routes'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Router>
          <Switch>
            {routes}
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
