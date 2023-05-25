import React from "react";
import {Routes, Route,useLocation} from 'react-router-dom';
import Home from "../../Pages/js/home";
import About from "../../Pages/js/about";
import Contact from "../../Pages/js/contact";
import Projects from "../../Pages/js/projects";
import '../../Pages/css/home.css'
import {AnimatePresence} from 'framer-motion'


function Pages() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes className='main-container' location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/about-me' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact-me' element={<Contact />} />
            </Routes>
        </AnimatePresence>
      );
}

export default Pages;