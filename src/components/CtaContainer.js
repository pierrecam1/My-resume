import React from 'react';
import LinkButton from '../components/LinkButton.js'
import Fade from 'react-reveal/Fade';



function CtaContainer() {
  return (
    <section id="solution-contact-me">
      <Fade bottom distance='25px'>
      <div className='max-w3 text-center'>
        <h2 className='revealBlock'>You have a project to build&nbsp;?<br></br>I'm glad to help you</h2>
        <a className='btn-project'href='mailto:pierre.urbain.cammas@gmail.com' rel="noopener noreferrer">Contact me</a>
      </div>
      </Fade>
    </section>
  );
}

export default CtaContainer;