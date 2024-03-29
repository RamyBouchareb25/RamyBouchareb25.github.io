import "../css/home.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import React from "react";
import { motion } from "framer-motion";
import Blue from "../../image/Blue.svg";
import Green from "../../image/Green.svg";
import Game from "../../Components/js/Game";
import { useMediaQuery } from "@material-ui/core";
function Home() {
  const isSmallScreen = useMediaQuery("(max-width: 960px)");
  let code = `
// visit my github for my projects and source code

const githubLink = "https://github.com/RamyBouchareb25"
    `;
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className="container"
    >
      <div className="description">
        <img className="Blue" src={Blue} alt="Blue blurred background" />
        <img className="Green" src={Green} alt="Green blurred background" />
        <p>Hi all. I am</p>
        <h1>Ramy Bouchareb</h1>
        <h2>&gt; Mobile/Web Developer</h2>
        <SyntaxHighlighter wrapLongLines={true} language="javascript" style={atomOneDark}>
          {code}
        </SyntaxHighlighter>
      </div>
      {isSmallScreen ? (
        <></>
      ) : (
        <div className="game">
          <Game />
        </div>
      )}
    </motion.div>
  );
}

export default Home;
