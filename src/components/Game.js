import { React, useState } from 'react';
import Board from '../components/Board';
import { calculateWinners } from '../helpers';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinners(board);

    const handleClick = () => {
        
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