import React, {Fragment, Component} from 'react'
import CtaContainer from '../components/CtaContainer.js'
import NotFound from '../components/Notfound.js'
import LinkButton from '../components/LinkButton.js'
import projects from '../projects.js'
import strategy from '../media/strategy.svg';
import design from '../media/design.svg';
import webdevelopment from '../media/webdevelopment.svg';
import Fade from 'react-reveal/Fade';



class ProjectPage extends Component {

render(){
  const { match } = this.props;
  const project = projects.find(({key}) => key === match.params.id)
  if (!project) return <NotFound />;

  // NEXT PROJECT
  function nextProject(){
    const map1 = projects.map(({key}) => key );
    const currentKey = map1.indexOf(match.params.id)
    const nextKey = currentKey + 1;
    const prevKey = currentKey - 1;
    let nextProjectPath = map1[nextKey];
    let nextProjectName;
    if (nextProjectPath === undefined){
      nextProjectPath = map1[0];
      nextProjectName = projects[0].name;
    }else{
      nextProjectName = projects[nextKey].name;
    }
    let prevProjectPath = map1[prevKey];
    let prevProjectName;
    if (prevProjectPath === undefined){
      prevProjectPath = map1[map1.length - 1];
      prevProjectName = projects[map1.length - 1].name;
    }else{
      prevProjectName = projects[prevKey].name;
    }

    return [nextProjectPath, nextProjectName, prevProjectPath, prevProjectName]
  }
  var values = nextProject();
  var nextProjectPath = values[0];
  var nextProjectName = values[1];
  var prevProjectPath = values[2];
  var prevProjectName = values[3]
  

  //TRY CATH METHOD GET PATH TO IMAGE
  const requireImage = path => {
    try {
        return require(`../media/img/${path}`)
    } catch (err){
        return require(`../media/img/conseil-immo-cover.jpg`)
    }
}
// IF PART 2 EXIST
function partTwo(){
  if(project.titleSpan2){
    return(
      <section className="max-w2" id="solution-part2">
      <Fade bottom distance='25px'><div className='titlecontainer max-w3'> 
        <h2 ><span>{project.titleSpan2}</span>{project.titleBody2}</h2>
        <p className='col-2 '>{project.textBody2}</p>
      </div></Fade>
      <Fade bottom distance='25px'><img className="contain-img " src={requireImage(project.imgBody2)} alt={project.imgBody2} alt=""/></Fade>
    </section>
    )

  }
}
// IF PART 3 EXIST
function partThree(){

    if (project.titleBody3){
      return(
    <Fragment>
          <hr className="max-w2 projec-hr" ></hr>
    <section className="max-w2 flex wrap" id="solution-part3">
    <Fade bottom distance='25px'><div className='titlecontainer col-2 '> 
        <h2 ><span>{project.titleSpan3}</span>{project.titleBody3}</h2>
        <p className='col-2'>{project.textBody3}</p>
      </div></Fade>
      <Fade bottom distance='25px'><img className="col-2 contain-img " src={requireImage(project.imgBody3)} alt={project.imgBody3} alt=""/></Fade>
    </section>
    </Fragment>
    
  )}
}
// IF LAST SECTION EXIST
function lastSection(){
if (project.titleBody4){
return(
  <Fragment>
  <br></br>
  <section id="solution-last" className="max-w2">
  <Fade bottom distance='25px'><div className='titlecontainer'>
    <h2 className="col-2 "><span>{project.titleSpan4}</span>{project.titleBody4}</h2>
    <p  className="col-2 ">{project.textBody4}</p>
    </div></Fade>
    <Fade bottom distance='25px'><img className="contain-img " src={requireImage(project.imgBody4)} alt={project.imgBody4} /></Fade>
  </section>
  </Fragment>
)
}
}
  return(
    <Fragment>
    <header id={project.key} className='project' >
    <Fade bottom distance='25px'><div className="max-w flex-col align-center ">
      <h1 className="col-2"><span>{project.name}</span>{project.titlepage}</h1>
      <img className="contain-img col-2" src={requireImage(project.imgHeader)} alt={project.imgHeader} />
      </div></Fade>
    </header>
    <section className="max-w2" id="solution-build">
    <Fade bottom distance='25px'><h2 className='titlecontainer max-w3 '><span>{project.titleSpan}</span>{project.titleBody}</h2></Fade>
    <Fade bottom distance='25px'><img className="contain-img " src={requireImage(project.imgBody)} alt={project.imgBody} alt=""/></Fade>
      <div className='max-w3 flex wrap justify-between'>
      <Fade bottom distance='25px'> <span className='col-2 '>{project.textBody.split('\n').map(item => <p key={item}>{item}</p>)}
        </span></Fade>
       <ul className='col-3 flex wrap justify-between'>
       <Fade bottom distance='25px'><li>
           <img src={strategy} alt=""/>
           <b>Strategy</b>
           {project.strategy.split('\n').map(item => <p key={item}>{item}</p>)}
          
         </li></Fade>
         <Fade bottom distance='25px'><li >
         <img src={design} alt=""/>
           <b>Design</b>
          {project.design.split('\n').map(item => <p key={item}>{item}</p>)}
          </li></Fade>
         <Fade bottom distance='25px'><li >
         <img src={webdevelopment} alt=""/>
           <b>Development</b>
          {project.development.split('\n').map(item => <p key={item}>{item}</p>)}
         </li></Fade>
       </ul>
      </div>
    </section>
    <hr className="max-w2 projec-hr"></hr>
    {partTwo()}
    {partThree()}
    {lastSection()}
    <section class='nextprevproject'>
      <LinkButton link={`Prev project: ${prevProjectName}`} path={prevProjectPath} className='btn-select-project'/>
      <LinkButton link={`Next project: ${nextProjectName}`} path={nextProjectPath} className='btn-select-project'/>
    </section>
    <CtaContainer/>
    </Fragment>
  )
}

}

export default ProjectPage;


