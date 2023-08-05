import React, { useRef,useState } from 'react';
import '../css/NavBar.css'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'
import { useMediaQuery } from '@material-ui/core';
function Navbar() {
  const isSmallScreen = useMediaQuery('(max-width: 960px)');
  const [isOpen, setOpen] = useState(false);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);
  const myRef5 = useRef(null);
  let x1, x2, x3, x4;
  x1 = myRef1.current ? myRef1.current.offsetLeft : 244;
  x2 = myRef2.current ? myRef2.current.offsetLeft : 369;
  x3 = myRef3.current ? myRef3.current.offsetLeft : 493;
  x4 = myRef4.current ? myRef4.current.offsetLeft : 1412;
  
  const location = useLocation();
  const handleToggle = () => {
    setOpen(!isOpen);
    myRef5.current.style.height = !isOpen ? "100vh" : "50px";
    
  }
  const handleClick = () => {
    handleToggle();
  }
  return (
    <nav ref={myRef5} className="navbar" style={{
      height: isSmallScreen ? "50px" : "auto",
      transition: "all 500ms ease-in-out",
    }}>
      <ul>
      {!isSmallScreen ?
      <>
      <motion.div
        className="underline"
        initial={{ x: 0 }}
        animate={{
          x:
          location.pathname === '/'
              ? x1
              : location.pathname === '/about-me'
              ? x2
              : location.pathname === '/projects'
              ? x3
              : location.pathname === '/contact-me'
              ? x4
              : 0,
            }}
            transition={{ duration: 0.1 }}
            />
        <div>
            <li className='nav-element name'>ramy-bouchareb</li>
            <li><NavLink ref={myRef1} to="/" exact activeClassName="active" className="nav-element button">_hello</NavLink></li>
            <li><NavLink ref={myRef2} to="/about-me" exact activeClassName="active" className="nav-element button">_about-me</NavLink></li>
            <li><NavLink ref={myRef3} to="/projects" exact activeClassName="active" className="nav-element button">_projects</NavLink></li>
        </div>
        <li><NavLink ref={myRef4} to="/contact-me" className="nav-element button">_contact-me</NavLink></li>
        </>
        : 
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          width: "100%",
        }}>
          <div style={{
            display: 'flex',
            width: "100%",
            justifyContent: 'space-between',
          }}>
            <li className='nav-element name'>ramy-bouchareb</li>
            <Hamburger onToggle={handleToggle} toggled={isOpen} className="hamburger" color="var(--secondary-1)" size={30} />
          </div>
          <div className='nav-container'>
            <li><NavLink onClick={handleClick} ref={myRef1} to="/" exact activeClassName="active" className="nav-element">_hello</NavLink></li>
            <li><NavLink onClick={handleClick} ref={myRef2} to="/about-me" exact activeClassName="active" className="nav-element">_about-me</NavLink></li>
            <li><NavLink onClick={handleClick} ref={myRef3} to="/projects" exact activeClassName="active" className="nav-element">_projects</NavLink></li>
            <li><NavLink onClick={handleClick} ref={myRef4} to="/contact-me" className="nav-element nav-element">_contact-me</NavLink></li>
          </div>
        </div>
        }
      </ul>
    </nav>
    );
  }
  
export default Navbar;
