import React from 'react';
import SVGIcon from '../components/SVGIcon.js'
import imgprofil from '../media/img/profil.jpg';





function Navbar() {
  return (
    <div className="Navbar">
        <nav className='flex justify-between max-w align-center'>
            <a href="#" className="flex align-center"><img className='justify-img img-profil' src={imgprofil} alt="Pierre CAMMAS Fullstack" style={{marginRight: 15 + 'px'}}/>Pierre CAMMAS</a>
          <div>
            <a href="#" className="navitem">Resume</a>
            <a href="#" className="navitem">
            <SVGIcon
            name="linkedin"
            width={16}
            height={16}/>
            </a>
          </div>
        </nav>
    </div>
  );
}

export default Navbar;