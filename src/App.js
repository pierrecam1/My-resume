import React, { Component } from 'react'

import Navbar from './components/Navbar.js'
import Header from './components/Header.js';
import ProjectCard from './components/ProjectCard.js'


import './assets/scss/style.scss';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <ProjectCard/>
    </div>
  );
}

export default App;
