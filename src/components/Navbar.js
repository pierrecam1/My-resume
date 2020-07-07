import React from 'react';
import SVGIcon from '../components/SVGIcon.js'
import imgprofil from '../media/img/profil.jpg'
import LinkButton from '../components/LinkButton.js'
import {Link, useLocation } from 'react-router-dom'



function Navbar() {
let location = useLocation();
const slug = location.pathname;
let valueClass = '';
if((slug !== '/') && (slug !== '/resume') && (slug !== '/project')){
   valueClass = 'black';
}else{
   valueClass = 'white';
}
const SwithItem = () => {
  if(slug === '/resume'){
    return(
      <LinkButton link='Back to home' path='/' className={'btn-nav'}></LinkButton>
    )
  }else{
    return(
      <Link to="/">
        <li className="flex align-center">
        <img className='justify-img img-profil' src={imgprofil} alt="Pierre CAMMAS developer Fullstack" style={{marginRight: 15 + 'px'}}/>
        Pierre CAMMAS</li>
      </Link>
    )
  }
}
  return (
    <nav className={"Navbar " + `${valueClass}`}>
        <ul className='flex justify-between max-w align-center'>
         
            {SwithItem()}
         
          <div className='flex'>
            <Link to='/resume'>
              <li className="navitem">Resume</li>
            </Link>
            <li className="navitem">
              <a href='https://www.linkedin.com/in/pierre-cammas/'target="_blank" rel="noopener noreferrer">
              <SVGIcon
              name="linkedin"
              width={16}
              height={16}/>
              </a>
            </li>
          </div>
        </ul>
    </nav>
  );
}

export default Navbar;