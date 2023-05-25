import React from 'react';
import '../css/Footer.css';
import { FaLinkedin,FaInstagram,FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className='container-foot'>
        <p className='element' style={{width: "164px"}}>find me in :</p>
        <a className='element icon-container' href='https://www.instagram.com/boucharebramy/'><FaInstagram className='icon'/></a>
        <a className='element icon-container' href='https://www.linkedin.com/in/ramy-bouchareb-03536b227/'><FaLinkedin className='icon'/> </a>
      </div>
      <div className='text-container'>
        <p className='element text'>@RamyBouchareb25 </p>
        <FaGithub className='icon'/>
        <i></i>
      </div>
    </div>
  );
}

export default Footer;
