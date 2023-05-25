import React, { useRef , useEffect} from 'react'
import {motion} from 'framer-motion'
import Form from '../../Components/js/from';
import Menu from '../../Components/js/ContactMenu'
import Editor from '@monaco-editor/react';
import '../css/Contact.css'



function Contact() {
  let name ="" ,email ="",message ="";
  const value = `
  const button = document.querySelector('#sendBtn');

  const message = {
    name: "${name}",
    email: "${email}",
    message: "${message}",
  }

  button.addEventListener('click', () => {
    form.send(message);
  })`;
  const myRef = useRef();
  const myRef1 = useRef();
  const [Width, setWidth] = React.useState(917);
  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth - myRef.current.offsetWidth - myRef1.current.offsetWidth - 50);
      console.log(myRef1.current.offsetWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      style={{
        display: "flex",
      }}
        >
        <Menu ref={myRef}/>
        <div ref={myRef1} className='form-container'>
          <Form />
        </div>
        <div style={{
          width: Width,
        }}>
            <Editor theme='vs-dark' options={{
              minimap: {
                enabled: false, // Disable the minimap
              },
            }} height="100%" width="100%" defaultLanguage="javascript" defaultValue={value} />
        </div>
        </motion.div>
    );
}

export default Contact;