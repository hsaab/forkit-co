import React, { Component } from 'react';
import './App.css';
import Home from './Containers/Home';
import About from './Containers/About';
import Contact from './Containers/Contact';
import PasswordRecovery from './Containers/PasswordRecovery';
import { HashRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/recovery" component={PasswordRecovery}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
