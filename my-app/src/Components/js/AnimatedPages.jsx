import React from "react";
import {Routes, Route,useLocation} from 'react-router-dom';
import Home from "../../Pages/js/home";
import About from "../../Pages/js/about";
import Contact from "../../Pages/js/contact";
import Projects from "../../Pages/js/projects.tsx";
import '../../Pages/css/home.css'
import {AnimatePresence} from 'framer-motion'
import { useMediaQuery } from "@material-ui/core";

function Pages() {
    const issmallScreen = useMediaQuery('(max-width: 960px)')
    const location = useLocation()
    const isNotHome = location.pathname !== '/' && issmallScreen
    document.querySelector('body').style.overflow = isNotHome ? 'scroll' : 'hidden'
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