import React , {useRef} from "react";
import "../css/Snake.css";
import SnakeGame from '../../Snake/Snake'
function Snake({changeFood}) {
    const startButton = useRef();
    return (
        <div className="snake-container">
            <div style={{
                color: 'white',
                width: '10px',
                height: '10px',
            }}>
                <SnakeGame eatApple={changeFood}/>
            </div>
        </div>
    );
}

export default Snake;