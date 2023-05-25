import './App.css';
import NavBar from './Components/js/NavBar.jsx';
import Footer from "./Components/js/Footer.jsx";
import { BrowserRouter as Router} from "react-router-dom";
import Pages from './Components/js/AnimatedPages';
import { useMediaQuery } from '@material-ui/core';

function App() {
  const isSmallScreen = useMediaQuery('(max-width: 960px)');

  return (
      <Router className="App">
        <header className="App-header">
        {isSmallScreen ? <div></div> : <NavBar className="nav"/>}
        </header>
        {isSmallScreen ? 
        <div style={{
          display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '2rem',
                color: 'var(--secondary-1)',
                flexDirection: 'column',
        }}>
          <p>Responsive Still in construction X( </p>
            <p>come back later or check it out on pc </p>
         </div>
         : <Pages />}
        <Footer/>
      </Router>
  );
}

export default App;
