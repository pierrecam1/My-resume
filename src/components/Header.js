import React, {Component} from 'react'
import SVGIcon from '../components/SVGIcon.js'
import LinkButton from '../components/LinkButton.js';
import imgheader from '../media/img/img-header.jpg';
import Fade from 'react-reveal/Fade'; 




class Header extends Component{

  render(){
    return (
      <header>
            <section className="max-w flex wrap justify-between align-center">
              
                <Fade top distance='25px'><div className="col-2 text-header ">
                <h1>Hi I'm Pierre, <span>UI/Ux designer </span>
                and <span>Fullstack developer</span></h1>
                <p>Passionate about the digital world.<br></br>
                I like to keep abreast of new trends in the job and use them in my design.
                <br></br>Result-driven, I attach great importance to user feedback.</p>
                <Fade><LinkButton className={'btn'} link='See my project' fill={'white'} path='/project' /></Fade>
              </div>
              
              <img className='contain-img col-2 ' src={imgheader} alt=""/></Fade>
            </section>
            <div className="max-w">
              <hr></hr>
              <Fade bottom distance='25px'>
                <div className='flex justify-between align-center container-techno'>
                <p>I built solution with</p>
                <div className='container-picto '>
                <div className=''>
                  <SVGIcon
                  name="node"
                  width={42.991}
                  height={48.49}/>
                </div>
                <div className="">
                  <SVGIcon
                  name="php"
                  width={61.58}
                  height={32.387}/>
                </div>
                <div className="">
                  <SVGIcon
                  name="wordpress"
                  width={42.991}
                  height={48.49}/>
                </div>
                <div className="">
                  <SVGIcon
                  name="react"
                  width={42.991}
                  height={48.49}/>
                </div>
                <div className="">
                  <SVGIcon
                  name="ruby"
                  width={93.26}
                  height={32.791}/>
                </div>
                </div>
              </div></Fade>
            </div>
          </header>
    );
  }

}
export default Header