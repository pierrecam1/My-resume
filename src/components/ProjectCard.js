import React, {Component} from 'react'
import LinkButton from '../components/LinkButton.js';

import projects from '../projects.js'


class ProjectCard extends Component {
render(){
  //TRY CATH METHOD GET PATH TO IMAGE
  const requireImage = chemin => {
    try {
        return require(`../media/img/${chemin}`)
    } catch (err){
        return require(`../media/img/conseil-immo-cover.jpg`)
    }
}
    //CREATE MAP OF PROJECT AND DISPLAY IN HTML
  const card = projects.map((projects) =>
  <div className="projects-card col-2" key={projects.key}>
    <img className="contain-img" src={requireImage(projects.img)} alt={projects.name} />
    <h3>{projects.name}</h3>
    <p>{projects.excerpt}</p>
    <LinkButton className={'btn-card'} link='See my project'/>
  </div>
);
  return (
    <section className='projects max-w2 justify-center text-center'>
        <h2>Last project</h2>
        <p>Little description about the project</p>
        <div className="flex justify-between text-left wrap">
            {card}
        </div>
    </section>
  );
}

}

export default ProjectCard;

