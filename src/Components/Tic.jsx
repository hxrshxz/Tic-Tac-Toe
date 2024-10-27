import React, { useState } from 'react';
import { Circle, X } from 'react-feather';
import '../App.css';

let initialData = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6]  // Diagonal 2
];

const Tic = () => {
    const [count, setCount] = useState(0);
    const [gameData, setGameData] = useState(initialData);

    function whoWon() {
        const circleData = [];
        const crossData = [];
        for (let i = 0; i < gameData.length; i++) {
            if (gameData[i] === 'circle') {
                circleData.push(i);
            } else if (gameData[i] === 'cross') {
                crossData.push(i);
            }
        }

        for (let combination of winningCombinations) {
            if (combination.every(index => circleData.includes(index))) {
                alert("Circle Wins");
                resetGame();
                return;
            } else if (combination.every(index => crossData.includes(index))) {
                alert("Cross Wins");
                resetGame();
                return;
            }
        }
    }

    const resetGame = () => {
        setCount(0);
        setGameData(initialData);
    }

    const toggle = (num) => {
        if (gameData[num] !== "") {

            return;
        }

        const newGameData = [...gameData];
        newGameData[num] = count % 2 === 0 ? 'circle' : 'cross';
        setGameData(newGameData);

        whoWon();

        setCount(count + 1);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Tic Tac Toe</h1>
            <div className='board'>
                <div className="row1">
                    {[0, 1, 2].map(num => (
                        <div key={num} className="boxes" onClick={() => toggle(num)}>
                            {gameData[num] === "circle" ? <Circle className='Circle' /> : gameData[num] === "cross" ? <X className='Cross' /> : null}
                        </div>
                    ))}
                </div>
                <div className="row2">
                    {[3, 4, 5].map(num => (
                        <div key={num} className='boxes' onClick={() => toggle(num)}>
                            {gameData[num] === 'circle' ? <Circle className='Circle' /> : gameData[num] === 'cross' ? <X className='Cross' /> : null}
                        </div>
                    ))}
                </div>
                <div className="row3">
                    {[6, 7, 8].map(num => (
                        <div key={num} className='boxes' onClick={() => toggle(num)}>
                            {gameData[num] === 'circle' ? <Circle className='Circle' /> : gameData[num] === 'cross' ? <X className='Cross' /> : null}
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={resetGame} className="reset">Reset</button>
        </div>
    );
}

export default Tic;
