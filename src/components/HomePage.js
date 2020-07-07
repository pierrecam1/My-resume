import React, { Fragment }  from 'react';
import Header from '../components/Header.js'
import ProjectCard from '../components/ProjectCard.js'
import CtaContainer from '../components/CtaContainer.js'


function HomePage() {
  return(
    <Fragment>
      <Header/>
      <ProjectCard/>
      <CtaContainer/>
    </Fragment>

  )
}


export default HomePage