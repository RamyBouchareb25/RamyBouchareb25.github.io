import React from "react";
import "../css/Game.css";
import BoltUpRight from "../../image/bolt-up-right.svg";
import BoltUpLeft from "../../image/bolt-down-left.svg";
import BoltDownLeft from "../../image/bolt-down-left.svg";
import BoltDownRight from "../../image/bolt-down-right.svg";
import leftArrow from "../../image/Left Arrow.svg";
import rightArrow from "../../image/Right Arrow.svg";
import upArrow from "../../image/Up Arrow.svg";
import downArrow from "../../image/Down Arrow.svg";
import food from "../../image/Snake's Food.svg";
import food2 from "../../image/Snake's Food Eaten.svg";
import Snake from "./Snake";
function Game() {
  return (
    <div className="game-container">
      <img
        style={{
          position: "absolute",
          top: "17px",
          right: "17px",
        }}
        src={BoltUpRight}
        alt="bolt"
      />
      <img
        style={{
          position: "absolute",
          top: "17px",
          left: "17px",
        }}
        src={BoltUpLeft}
        alt="bolt"
      />
      <img
        style={{
          position: "absolute",
          bottom: "17px",
          left: "17px",
        }}
        src={BoltDownLeft}
        alt="bolt"
      />
      <img
        style={{
          position: "absolute",
          bottom: "17px",
          right: "17px",
        }}
        src={BoltDownRight}
        alt="bolt"
      />
      <div style={{
        width: '100%',
      }}>
        <Snake />
      </div>
      <div>
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: '10px',
        }}>
          <span>// use keyboard // arrows to play</span>
          <img src={upArrow} alt="" />
          <img src={leftArrow} alt="" />
          <img src={rightArrow} alt="" />
          <img src={downArrow} alt="" />
        </div>
        <span>// food left</span>
        <img src={food} alt="" />
        <img src={food} alt="" />
        <img src={food} alt="" />
        <img src={food} alt="" />
        <img src={food} alt="" />
        <img src={food} alt="" />
        <img src={food} alt="" />
        <img src={food} alt="" />
        <img src={food} alt="" />
        <img src={food} alt="" />
      </div>
    </div>
  );
}

export default Game;
