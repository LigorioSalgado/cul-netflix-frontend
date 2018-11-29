import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router,Switch} from 'react-router-dom';
import routes from './Routes';
import {Navbar} from './common/Navbar';
import {ApolloProvider} from 'react-apollo'
import client from './Graphql';

class App extends Component {
  render() {
    return (
      <ApolloProvider  client={client}>
        <div className="App">
          <Navbar/>
          <Router>
            <Switch>
              {routes}
            </Switch>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
