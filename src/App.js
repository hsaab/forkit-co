import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/Home';
import AboutPage from './Components/About';
import EatsPage from './Components/Eats';
import ExperiencePage from './Components/Experience';
import ContactPage from './Components/Contact';
import { HashRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div style={{backgroundColor: 'black'}}>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/eats" component={EatsPage}/>
              <Route path="/experience" component={ExperiencePage}/>
              <Route path="/contact" component={ContactPage}/>
            </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
