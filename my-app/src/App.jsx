import './App.css';
import NavBar from './Components/js/NavBar.jsx';
import Footer from "./Components/js/Footer.jsx";
import { HashRouter as Router} from "react-router-dom";
import Pages from './Components/js/AnimatedPages';
import { useMediaQuery } from '@material-ui/core';

function App() {
  const isSmallScreen = useMediaQuery('(max-width: 960px)');
  return (
      <Router className="App">
        <header className="App-header">
        <NavBar className="nav"/>
        </header>
          <Pages />
        <Footer/>
      </Router>
  );
}

export default App;
