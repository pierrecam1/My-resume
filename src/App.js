import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar.js'
import HomePage from './components/HomePage.js'
import ProjectPage from './components/ProjectPage.js'
import ResumePage from './components/ResumePage.js'
import ScrollToTop from './components/ScrollToTop.js'
import Notfound from './components/Notfound.js'


import './assets/scss/style.scss';
import ProjectCard from './components/ProjectCard.js';

class App extends Component {
 
  render(){
    return (
      <Router>
        
        <ScrollToTop />
          <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/project/:id' component={ProjectPage}/>
              <Route exact path='/resume' component={ResumePage}/>
              <Route exact path='/project' component={ProjectCard}/>
              <Route path='/' component={Notfound} />
            </Switch>
          </div>

      </Router>
    );
  }

}

export default App;
