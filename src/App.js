import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import ProjectCard from './components/ProjectCard.js'


import './assets/scss/style.scss';



class App extends Component {

  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Header/>
        <ProjectCard/>
      </div>
      </BrowserRouter>
    );
  }

}

export default App;
