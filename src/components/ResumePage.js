import React, {Component, Fragment} from 'react'
import LinkButton from '../components/LinkButton.js'
import CtaContainer from '../components/CtaContainer.js'
import resumeRicture from '../media/img/resumepicture.jpg';
import localize from '../media/localize.svg';
import mail from '../media/mail.svg';
import work from '../media/work.svg';
import Fade from 'react-reveal/Fade';






class ResumePage extends Component{

  render(){
    return (
      <Fragment>
      <section className='max-w flex wrap justify-between' id='resume'>
      <Fade bottom distance='25px'>
        <div className='aside '>
        <img className='img-profil'src={resumeRicture} alt="pierre cammas fullstack"/>
        <h1>Pierre CAMMAS<span>FullStack developer</span></h1>
        <a href='mailto:pierre.urbain.cammas@gmail.com'><img src={mail} alt='icon-mail'/>pierre.urbain.cammas@gmail.com</a>
        <span><img src={localize} alt='icon-localize'/>Toulouse, FRANCE</span>
        <span><img src={work} alt='icon-work'/>Full Time</span>
        <LinkButton link='Download Resume' path='/' className={'btn text-center'}></LinkButton>
        </div>
      </Fade>
        <div className='col-aside'>
        <Fade bottom distance='25px'>
          <div >
            <h2>Professional Summary</h2>
            <p className="col-2">I'm UI/Ux designer and developer passionate about the digital world.
            I like to keep abreast of new trends in the job and use them in my design.
            Result-driven, I attach great importance to user feedback.
            After 3 years of design including 2 years of UI/UX where I designed and developed websites and users interfaces, I decided to fully embrace the world of digital and graduate as a Fullstack developer.
            Natural optimistic, I attache a great value to team work. Problem solver, i like to think about it, and try differents aproches to fix it.
            </p>
          </div>
          </Fade>
          <div >
          <Fade bottom distance='25px'><h2>Experiences</h2></Fade>
          <ul className='experience-list'>
          <Fade bottom distance='25px'><li className='flex justify-between'>
              <div>
                <h3>UI / UX Web-designer</h3>
                <p>Agence W’Com</p>
              </div>
              <p>Jully 2018 - Today </p>
            </li></Fade>
            <Fade bottom distance='25px'><li className='flex justify-between'>
              <div >
                <h3>UI / UX Web-designer</h3>
                <p>Agence W’Com</p>
              </div>
              <p>Jully 2018 - Today </p>
            </li></Fade>
            <Fade bottom distance='25px'><li className='flex justify-between'>
              <div >
                <h3>UI / UX Web-designer</h3>
                <p>Agence W’Com</p>
              </div>
              <p>Jully 2018 - Today </p>
            </li></Fade>
            <Fade bottom distance='25px'><li className='flex justify-between'>
              <div >
                <h3>UI / UX Web-designer</h3>
                <p>Agence W’Com</p>
              </div>
              <p>Jully 2018 - Today </p>
            </li></Fade>
          </ul>
          </div>
          <div className="skills-list ">
          <Fade bottom distance='25px'><h2>Skills</h2>
                <h3>Developement skills</h3></Fade>
                <ul className='flex justify-between'>
                  <Fade bottom distance='25px'><div>
                    <li>Language of programming</li> 
                    <li>Framework</li>
                    <li>Library JS</li>
                  </div></Fade>
                  <Fade bottom distance='25px'><div>
                    <li className='text-right'>HTML5, CSS3, Javascript, Php</li> 
                    <li className='text-right'>React, Ruby</li>
                    <li className='text-right'>Jquery et TweenMax</li>
                  </div></Fade>
                </ul>
                <Fade bottom distance='25px'> <h3>Graphique skills</h3>
                <ul className='flex justify-between'>
                  <div>
                    <li>Design</li> 
                    <li>Software</li>
                  </div>
                  <div>
                    <li className='text-right'>Webdesign, User Interface design</li> 
                    <li className='text-right'>Adobe CC, Figma, Sketch</li>
                  </div>
                </ul></Fade>
          </div>
          
        </div>
      </section>
      <CtaContainer/>
      </Fragment>
    );
  }

}
export default ResumePage