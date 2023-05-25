import React, { useState, useRef } from "react";
import "../css/AboutMenu.css";
import Professional from "../../image/professional-info-icon";
import Hobbies from "../../image/hobbies-icon";
import PersonalInfo from "../../image/personal-info-icon";
import Arrow from "../../image/arrow.svg";
import Arrow2 from "../../image/Arrow2.svg";
import mail from "../../image/mail-icon.svg";
import phone from "../../image/phone-icon.svg";
import folder1 from "../../image/Bio.svg";
import folder2 from "../../image/Interest.svg";
import folder3 from "../../image/Education.svg";
import {
  experience,
  skills,
  certificates,
  bio as bioInfo,
  interest,
  education as educ,
  hobbies,
  about,
} from "../../information/MyInfo";

function AboutMenu({ changeInfo }) {
  const icons = [folder1, folder2, folder3];
  const [menuNames, setMenuNames] = useState(["bio", "interests", "education"]);
  const [menuItems, setMenuItems] = useState([
    bioInfo,
    interest,
    educ,
  ]);
  const myRef = useRef([]);
  const [isActive, setisActive] = useState([true, true, false, false, false]);
  const [opacity, setOpacity] = useState(["0.4", "1", "0.4"]);
  const [menu, setMenu] = useState("personal-info");
  const [activeopacity, setActiveOpacity] = useState([false, true, false]);
  const handleClick1 = () => {
    setisActive(() =>
      isActive.map((item, index) =>
        index === 0 ? !isActive[0] : isActive[index]
      )
    );
    myRef.current[0].style.height = isActive[0]
      ? myRef.current[0].scrollHeight + "px"
      : "0px";
    myRef.current[0].style.marginBottom = isActive[0] ? "2vh" : "0px";
  };
  const handleClick2 = () => {
    setisActive(() =>
      isActive.map((item, index) =>
        index === 1 ? !isActive[1] : isActive[index]
      )
    );
    myRef.current[4].style.height = isActive[1]
      ? myRef.current[4].scrollHeight + "px"
      : "0px";
  };
  const handleClick3 = () => {
    console.log(myRef.current);
    setisActive(() =>
      isActive.map((item, index) => {
        switch (index) {
          case 2:
            return !isActive[2];
          case 3:
            return false;
          case 4:
            return false;
          default:
            return isActive[index];
        }
      })
    );
    myRef.current[1].style.height = !isActive[2]
      ? myRef.current[1].scrollHeight + "px"
      : "0px";
    isActive[2] ? changeInfo(about) : changeInfo(menuItems[0]);
  };
  const handleClick4 = () => {
    console.log(myRef.current);
    setisActive(() =>
      isActive.map((item, index) => {
        switch (index) {
          case 2:
            return false;
          case 3:
            return !isActive[3];
          case 4:
            return false;
          default:
            return isActive[index];
        }
      })
    );
    myRef.current[2].style.height = !isActive[3]
      ? myRef.current[2].scrollHeight + "px"
      : "0px";
      isActive[3] ? changeInfo(about) : changeInfo(menuItems[1]);
  };
  const handleClick5 = () => {
    console.log(myRef.current);
    setisActive(() =>
      isActive.map((item, index) => {
        switch (index) {
          case 2:
            return false;
          case 3:
            return false;
          case 4:
            return !isActive[4];
          default:
            return isActive[index];
        }
      })
    );
    myRef.current[3].style.height = !isActive[4]
      ? myRef.current[3].scrollHeight + "px"
      : "0px";
      isActive[4] ? changeInfo(about) : changeInfo(menuItems[2]);
  };
  const handleClick6 = () => {
    setMenu("professional-info");
    setMenuItems([experience, skills, certificates]);
    setMenuNames(["experience", "skills", "certificates"]);
    setOpacity(["1", "0.4", "0.4"]);
    setActiveOpacity([true, false, false]);
  };
  const handleClick7 = () => {
    setMenu("personal-info");
    setMenuItems([bioInfo, interest, educ]);
    setMenuNames(["bio", "interests", "education"]);
    setOpacity(["0.4", "1", "0.4"]);
    setActiveOpacity([false, true, false]);
  };
  const handleClick8 = () => {
    setMenu("hobbies");
    setMenuItems([hobbies]);
    setMenuNames(["hobbies"]);
    setOpacity(["0.4", "0.4", "1"]);
    setActiveOpacity([false, false, true]);
  };

  const hoverEnter1 = () => {
    setOpacity(["1", "0.4", "0.4"]);
  };
  const hoverEnter2 = () => {
    setOpacity(["0.4", "1", "0.4"]);
  };
  const hoverEnter3 = () => {
    setOpacity(["0.4", "0.4", "1"]);
  };
  const hoverExit = () => {
    setOpacity(activeopacity.map((item) => (item === true ? "1" : "0.4")));
  };

  return (
    <menu className="abt">
      <div className="tools">
        <button
          className="button-unset menu-button"
          onClick={handleClick6}
          onMouseEnter={hoverEnter1}
          onMouseLeave={hoverExit}
        >
          <Professional opacity={opacity[0]} />
        </button>
        <button
          className="button-unset menu-button"
          onClick={handleClick7}
          onMouseEnter={hoverEnter2}
          onMouseLeave={hoverExit}
        >
          <PersonalInfo opacity={opacity[1]} />
        </button>
        <button
          className="button-unset menu-button"
          onClick={handleClick8}
          onMouseEnter={hoverEnter3}
          onMouseLeave={hoverExit}
        >
          <Hobbies opacity={opacity[2]} />
        </button>
      </div>
      <div className="folders">
        <button className="Contact-Button" onClick={handleClick1}>
          <img
            className={isActive[0] ? "Arrow Selected" : "Arrow"}
            src={Arrow}
            alt="Arrow"
          />
          {menu}
        </button>
        <div>
          <div
            ref={(element) => (myRef.current[0] = element)}
            style={{
              height: 0,
              overflow: "hidden",
              transition: "all 0.3s ease-in-out",
            }}
          >
            {menuNames.map((item, index) => {
              return (
                <div>
                  <p className="elem-container">
                    <img
                      src={Arrow2}
                      alt="e-mail"
                      className={isActive[index + 2] ? "icon Selected" : "icon"}
                    />
                    <img src={icons[index]} alt="e-mail" />
                    <button
                      className="button-unset elem-button"
                      onClick={index === 0 ? handleClick3 : index === 1 ? handleClick4 : handleClick5}
                    >
                      {item}
                    </button>
                  </p>
                  <div
                    style={{
                      height: 0,
                      overflow: "hidden",
                      transition: "all 0.3s ease-in-out",
                    }}
                    ref={(element) => (myRef.current[index + 1] = element)}
                    className="interests-container"
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        <button className="Contact-Button top" onClick={handleClick2}>
          <img
            className={isActive[1] ? "Arrow Selected" : "Arrow"}
            src={Arrow}
            alt="Arrow"
          />
          contacts
        </button>
        <div
          ref={(element) => (myRef.current[4] = element)}
          style={{
            height: 0,
            overflow: "hidden",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <p className="elem-container">
            <img src={mail} alt="e-mail" className="icon" />
            <a className="elem-button" href="mailto:ramybouchareb@outlook.com">
              ramybouchareb@outlook.com
            </a>
          </p>
          <p className="elem-container">
            <img src={phone} alt="phone" className="icon" />
            <a className="elem-button" href="tel:+213772864262">
              +213772864262
            </a>
          </p>
        </div>
      </div>
    </menu>
  );
}

export default AboutMenu;
