import React from 'react';
import '../css/Footer.css';
import { FaLinkedin,FaInstagram,FaGithub } from "react-icons/fa";
import { useMediaQuery } from '@material-ui/core';
function Footer() {
  const isSmallScreen = useMediaQuery('(max-width: 960px)');
  return (
    
    <div className="footer">
      <div className='container-foot'>
        <p className='element' style={{width: "164px"}}>find me in :</p>
        <a className='element icon-container' href='https://www.instagram.com/boucharebramy/'><FaInstagram className='icon'/></a>
        <a className='element icon-container' href='https://www.linkedin.com/in/ramy-bouchareb-03536b227/'><FaLinkedin className='icon'/> </a>
      </div>
      <div className='text-container'>
        <a className='element icon-container' href="http://github.com/ramybouchareb25" target="_blank" rel="noopener noreferrer">
        {!isSmallScreen ? <p className='element text'>@RamyBouchareb25 </p> : null}
        <FaGithub className='icon'/>
        <i></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
