import { React, useState } from 'react';
import Board from '../components/Board';
import { calculateWinners } from '../helpers';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinners(board);

    const handleClick = i => {
        const boardCopy = [...board]
        //If user clicks an occupied square or if the  game is won, return
        if (winner || boardCopy[i]) return; 
        //Put an X ior an O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }
    
    const jumpTo = () => {
        
    }
    
    const renderMoves = () => {
        
    }
    
     return (
        <Board squares={board} onClick={handleClick} />
    )
}

export default Game;