import React, {Component} from 'react'
import LinkButton from '../components/LinkButton.js';
import projects from '../projects.js'
import Fade from 'react-reveal/Fade';


class ProjectCard extends Component {

render(){
  //TRY CATH METHOD GET PATH TO IMAGE
  const requireImage = path => {
    try {
        return require(`../media/img/${path}`)
    } catch (err){
        return require(`../media/img/conseil-immo-cover.jpg`)
    }
}
    //CREATE MAP OF PROJECT AND DISPLAY IN HTML
  const card = projects.map((project) =>
  <Fade bottom distance='25px'  key={project.key}>
    <div className="projects-card col-2 revealInterval" id='project'>
    <img className="contain-img" src={requireImage(project.img)} alt={project.name} />
    <h3>{project.name}</h3>
    <p>{project.excerpt}</p>
    <LinkButton
    path={`project/${project.key}`}
    className={'btn-card'}
    link='See project'/>
  </div>
  </Fade >
);
  return (
    <section className='projects max-w2 justify-center text-center'>
        <div className="container-h2 revealInterval">
        <Fade bottom distance='25px'><h2>Last project</h2>
        <p>Little description about the project</p></Fade>
        </div>
        <div className="flex justify-between text-left wrap">
            {card}
        </div>
    </section>
  );
}

}

export default ProjectCard;

