import React from 'react'
import {motion} from 'framer-motion'

function projects() {
    
    return (
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '2rem',
                color: 'var(--secondary-1)',
            }}> 
                This Page is still under construction :(
            </div>
        </motion.div>
    );
}

export default projects;