import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
  NUMBER_OF_APPLES,
  appleRadius
} from "./constants";

const Snake = ({eatApple}) => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const StartButton = useRef(null);
  const canva = useRef(null);
  const restartButton = useRef(null);
  const [ApplesEaten, setApplesEaten] = useState(0);
  useInterval(() => gameLoop(), speed);

  const endGame = (win) => {
    setSpeed(null);
    setGameOver(!win);
    setWon(win);
    restartButton.current.style.visibility = "visible";
  };

  const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkAppleCollision = newSnake => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      setApplesEaten(ApplesEaten + 1);
      eatApple();
      if (ApplesEaten === NUMBER_OF_APPLES) endGame(true);
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame(false);
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
    setWon(false);
    StartButton.current.style.visibility = "hidden";
    restartButton.current.style.visibility = "hidden";
    canva.current.focus();
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    //Gradient color of the snake
    
    // Calculate the start and end points of the gradient
  const [headX, headY] = snake[0];
  const [tailX, tailY] = snake[snake.length - 1];

  const gradient = context.createLinearGradient(headX, headY, tailX + 1, tailY + 1);
  gradient.addColorStop(0, "#43D9AD"); // Start color at the head
  gradient.addColorStop(1, "rgba(67, 217, 173,0)"); // End color at the tail

  // Draw the entire snake with the gradient color
  snake.forEach(([x, y]) => {
    context.fillStyle = gradient;
    context.fillRect(x, y, 1, 1);
  });




  // Drawing Apple
  const [appleX, appleY] = apple;
  const offset = 0.5; // Adjust this value to set the horizontal offset
  const yOffset = 0.9; // Adjust this value to set the vertical offset
  DrawApple(context,appleX + offset,appleY + yOffset,appleRadius,1,0.6,0.3);
}, [snake, apple, gameOver]);


const DrawApple = (context, appleX, appleY, radius, alpha1, alpha2, alpha3) => {
  const drawCircle = (x, y, r) => {
    context.moveTo(x + r, y);
    context.arc(x, y, r, 0, Math.PI * 2);
  };

  context.fillStyle = `rgba(67, 217, 173, ${alpha1})`;
  context.beginPath();
  drawCircle(appleX, appleY, radius);
  context.fill();

  context.fillStyle = `rgba(67, 217, 173, ${alpha2})`;
  context.beginPath();
  drawCircle(appleX, appleY, radius * 2);
  context.fill();

  context.fillStyle = `rgba(67, 217, 173, ${alpha3})`;
  context.beginPath();
  drawCircle(appleX, appleY, radius * 3);
  context.fill();
};

  return (
    <div ref={canva} style={{outline:"none"}} role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
      <canvas
      tabIndex={1}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      {gameOver && <div className="GameOver">GAME OVER!</div>}
      {won && <div className="GameOver">WELL DONE!</div>}
      <button ref={StartButton} onClick={startGame} className="button-unset snake-button">start-game</button>
      <button ref={restartButton} onClick={startGame} className="button-unset restart-button" style={{visibility:"hidden"}}>{won ? "play-again" :  "start-again"}</button>
    </div>
  );
};

export default Snake;
