import React , {useState} from 'react'
import {motion} from 'framer-motion'
import '../css/about.css'
import Menu from '../../Components/js/AboutMenu'
import Cross from '../../image/Cross.svg'
import ShowCase from '../../Components/js/ShowCase'
import { about } from '../../information/MyInfo'
import { useMediaQuery } from '@material-ui/core'
function About() {
  
let [inf, setInf] = useState(about)
const isSmallScreen = useMediaQuery('(max-width: 960px)')
return (
  <motion.div 
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
        className='container-about'
        >
            {isSmallScreen ? <h2 className='title'>_about-me</h2> : null}
            <Menu changeInfo={setInf}/>
          <div className='info-container'>
              <menu type="context" className='context-menu'>
                {isSmallScreen ? null 
                : <div className='element-about'>
                personal-info
                <button className='close-button button-unset'><img src={Cross} alt="Close" /></button>
              </div>
                }
                
              </menu>
              <div className='about-container'>
                <div className='information'>
                      <div className='info'>
                        {inf}
                      </div>
                </div>
                <div className='showcase'>
                  <div className='info' style={{
                    padding: '15px 0 0 20px',
                  }}>// code snippets showcase :</div>
                    <ShowCase />
                </div>
              </div>
          </div>
        </motion.div>
    );
}

export default About;