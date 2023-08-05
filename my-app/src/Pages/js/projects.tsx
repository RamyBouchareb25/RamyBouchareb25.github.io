import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../css/project.css";
import ProjectMenu from "../../Components/js/projectMenu";
import Project from "../../Components/js/Project";
import img from "../../image/Website.png";
import img2 from "../../image/weather.png";
import img3 from "../../image/UnityImg.jpg";
import img4 from "../../image/games.jpg";
import img5 from "../../image/Thumb.png";
import { technologies } from "../../Components/js/enumeration";
import ReactModal from "react-modal";
import projectData from "../../class/projectData";
import { v4 as uuidv4 } from "uuid";
import { useMediaQuery } from "@material-ui/core";
function Projects() {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [openModal, setopenModal] = useState([false, false, false]);
  const [ischeckedReact, setischeckedReact] = useState(false);
  const [ischeckedFlutter, setischeckedFlutter] = useState(false);
  const [ischeckedHtml, setischeckedHtml] = useState(false);
  const [ischeckedCss, setischeckedCss] = useState(false);
  const [ischeckedUnity, setischeckedUnity] = useState(false);
  const showAll =
    ischeckedCss ||
    ischeckedFlutter ||
    ischeckedHtml ||
    ischeckedReact ||
    ischeckedUnity;
  const checklist: Record<technologies, boolean> = {
    [technologies.REACT]: ischeckedReact,
    [technologies.FLUTTER]: ischeckedFlutter,
    [technologies.HTML]: ischeckedHtml,
    [technologies.CSS]: ischeckedCss,
    [technologies.UNITY]: ischeckedUnity,
  };

  const projects = [
    new projectData(
      uuidv4(),
      "Portfolio",
      img,
      1,
      "Personal Portfolio website of Ramy Bouchareb",
      "Personal Portfolio website of Ramy Bouchareb, a full stack web developer and a computer science student",
      [technologies.REACT, technologies.CSS,technologies.HTML],
      "#86E1F9",
      "https://github.com/RamyBouchareb25/RamyBouchareb25.github.io"
    ),
    new projectData(
      uuidv4(),
      "WeatherApp",
      img2,
      2,
      "A Weather app made with flutter",
      "A Weather app made with flutter using the openweathermap API to get the weather data and the geolocator package to get the user's location and the weather data of his location",
      [technologies.FLUTTER],
      "#264ee4",
      "https://github.com/RamyBouchareb25/Weather"
    ),
    new projectData(
      uuidv4(),
      "Unity Training",
      img3,
      3,
      "A Unity game made for training",
      "A Unity game made for training",
      [technologies.UNITY],
      "#fff",
      "https://github.com/RamyBouchareb25/UnityTraining"
      ),
      new projectData(
        uuidv4(),
        "Mini Games",
        img4,
        4,
        "a collection of mini games made with flutter",
        "a collection of mini games made with flutter",
        [technologies.FLUTTER],
        "#264ee4",
        "https://github.com/RamyBouchareb25/mini-games"
      ),
      new projectData(
        uuidv4(),
        "Chat Box",
        img5,
        5,
        "A chatting app made with flutter and firebase",
        "A real-time chat application built with Flutter and Firebase that enables users to chat with each other seamlessly. It supports group chat, image sharing, and push notifications for instant messaging.",
        [technologies.FLUTTER],
        "#264ee4",
        "https://github.com/RamyBouchareb25/chat-box")
  ];

  const handleCss = () => {
    setischeckedCss(!ischeckedCss);
  };
  const handleFlutter = () => {
    setischeckedFlutter(!ischeckedFlutter);
  };
  const handleHtml = () => {
    setischeckedHtml(!ischeckedHtml);
  };
  const handleReact = () => {
    setischeckedReact(!ischeckedReact);
  };
  const handleUnity = () => {
    setischeckedUnity(!ischeckedUnity);
  };
  const handleClick = (number: number) => {
    console.log("clicked !!");
    var temp = [...openModal];
    temp[number] = !temp[number];
    console.log(temp);
    setopenModal(temp);
  };
  const handleClose = () => {
    var temp = [...openModal];
    temp.forEach((element, index) => {
      temp[index] = false;
    });
    setopenModal(temp);
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="menu-container"
        style={{
          display: "flex",
        }}
      >
        {isSmallScreen ? <h2 className='title'>_projects</h2> : null}
        <ProjectMenu 
          flutterChange={handleFlutter}
          cssChange={handleCss}
          reactChange={handleReact}
          unityChange={handleUnity}
          htmlChange={handleHtml}
        />
        <div className="projects-container">
          <div className="small-container">
            {showAll
              ? projects.map((project) => {
                  let check = false;
                  project.type.forEach((type) => {
                    if (checklist[type]) {
                      check = true;
                    }
                  });
                  return (
                    <>
                      <Project
                        title={project.title}
                        img={project.img}
                        number={project.number}
                        description={project.description}
                        type={project.type[0]}
                        color={project.color}
                        visible={check}
                        clickFunc={() => handleClick(project.number - 1)}
                      />
                      <ReactModal
                        style={{
                          overlay: {
                            backgroundColor: "rgba(0,0,0,0.5)",
                            zIndex: "1000",
                          },

                          content: {
                            color: "var(--secondary-1)",
                            backgroundColor: "var(--primary-2)",
                            height: "70%",
                            width: "45%",
                            margin: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            border: "var(--secondary-1) 2px solid",
                            borderRadius: "30px",
                            padding: "0",
                          },
                        }}
                        isOpen={openModal[project.number - 1]}
                        shouldCloseOnOverlayClick={true}
                      >
                        <img src={project.img} style={{ width: "100%" }} />
                        <div style={{ padding: "0 20px" }}>
                        {project.fullDescription}
                        </div>
                        <a
                          className="elem-button"
                          style={{ fontSize: "1.5pc" }}
                          href={project.link}
                          target="_blank"
                        >
                          see-on-github
                        </a>
                        <button
                          className="button-unset project-button"
                          onClick={handleClose}
                        >
                          Close
                        </button>
                      </ReactModal>
                    </>
                  );
                })
              : projects.map((project: projectData) => {
                  return (
                    <>
                      <Project
                        title={project.title}
                        img={project.img}
                        number={project.number}
                        description={project.description}
                        type={project.type[0]}
                        color={project.color}
                        visible={true}
                        clickFunc={ isSmallScreen ? () => {window.location.href = project.link} :() => handleClick(project.number - 1)}
                      />
                      <ReactModal
                        style={{
                          overlay: {
                            backgroundColor: "rgba(0,0,0,0.5)",
                            zIndex: "1000",
                          },
                          content: {
                            color: "var(--secondary-1)",
                            backgroundColor: "var(--primary-2)",
                            height: "70%",
                            width: "45%",
                            margin: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            border: "var(--secondary-1) 2px solid",
                            borderRadius: "30px",
                            padding: "0",
                          },
                        }}
                        isOpen={openModal[project.number - 1]}
                        shouldCloseOnEsc={false}
                        shouldCloseOnOverlayClick={true}
                      >
                        <img src={project.img} style={{ width: "100%" }} />
                        <div style={{ padding: "0 20px" }}>
                        {project.fullDescription}
                        </div>
                        <a
                          className="elem-button"
                          style={{ fontSize: "1.5pc" }}
                          href={project.link}
                          target="_blank"
                        >
                          see-on-github
                        </a>
                        <button
                          className="button-unset project-button"
                          onClick={handleClose}
                        >
                          Close
                        </button>
                      </ReactModal>
                    </>
                  );
                })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
