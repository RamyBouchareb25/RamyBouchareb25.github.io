import React , { useState } from "react";
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
import { NavLink } from 'react-router-dom';

function Game() {
  const [foodLeft, setFoodLeft] = useState([true, true, true, true, true,true, true, true, true, true]);
  const [numberFood, setNumberFood] = useState(10);
  function eat(){
    setFoodLeft(foodLeft.map((item, index) => {
      if (index === numberFood - 1) {
        return false;
      }
      return item;
    }));
    setNumberFood(numberFood - 1);
    
  }
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
        <Snake changeFood={eat}/>
      </div>
      <div style={{position:"relative"}}>
        <div style={{
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderRadius: '10px',
            width: "200px",
            height: "130px",
            marginBottom: "40px",
            padding: "10px 0",
        }}>
          <span style={{
            margin: "10px",
          }}>// use keyboard </span><br /><span style={{
            margin: "10px",
          }}> // arrows to play</span>
          <img style={{
            marginTop: "10px",
            marginLeft: "37%"
          }} src={upArrow} alt="" />
          <br />
          <img style={{
            marginLeft: "12%"
          }} src={leftArrow} alt="" />
          <img src={downArrow} alt="" />
          <img src={rightArrow} alt="" />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "space-between",
          height: "90px",
        }}>
          <div>
            <span>// food left</span>
          </div>
          <div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              width: "70%"
            }}>
              <img src={foodLeft[0] ? food : food2} alt="" />
              <img src={foodLeft[1] ? food : food2} alt="" />
              <img src={foodLeft[2] ? food : food2} alt="" />
              <img src={foodLeft[3] ? food : food2} alt="" />
              <img src={foodLeft[4] ? food : food2} alt="" />
            </div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              width: "70%"
            }}>
              <img src={foodLeft[5] ? food : food2} alt="" />
              <img src={foodLeft[6] ? food : food2} alt="" />
              <img src={foodLeft[7] ? food : food2} alt="" />
              <img src={foodLeft[8] ? food : food2} alt="" />
              <img src={foodLeft[9] ? food : food2} alt="" />
            </div>
          </div>
        </div>
        <div>
          <NavLink to="/about-me" exact activeClassName="active">
            <button className="button-unset" style={{
              color: 'white',
              border: '1px solid white',
              borderRadius: '7px',
              padding: '10px 25px',
              position: 'absolute',
              bottom: '10px',
              right: '10px',
            }}>
              Skip
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Game;
