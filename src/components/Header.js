import React, {Component} from 'react'
import SVGIcon from '../components/SVGIcon.js'
import LinkButton from '../components/LinkButton.js';

import imgheader from '../media/img/img-header.jpg';




function Header() {
  return (
    <header>
          <section className="max-w flex wrap justify-between align-center">
            <div className="col-2 text-header">
              <h1>Hi I'm Pierre, a <span>UI/Ux designer </span>
              and <span>Fullstack developer</span></h1>
              <p>Passionate about the digital world.<br></br>
              I like to keep abreast of new trends in the job and use them in my design.
              <br></br>Result-driven, I attach great importance to user feedback.</p>
              <LinkButton link='See my project'/>
            </div>
            <img className='contain-img col-2' src={imgheader} alt=""/>
          </section>
          <div className="max-w">
            <hr></hr>
            <div className='flex justify-between align-center container-techno'>
              <p>I built solution with</p>
              <div className='container-picto'>
              <SVGIcon
              name="node"
              width={42.991}
              height={48.49}/>
              <SVGIcon
              name="php"
              width={61.58}
              height={32.387}/>
              <SVGIcon
              name="wordpress"
              width={42.991}
              height={48.49}/>
              <SVGIcon
              name="react"
              width={42.991}
              height={48.49}/>
              <SVGIcon
              name="ruby"
              width={93.26}
              height={32.791}/>
              </div>
            </div>
          </div>
        </header>
  );
}
export default Header