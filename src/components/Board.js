import { React } from "react";
import Square from "../components/Square";

const style = {
    border: '4px solid green',
    borderRadius: '10px',
    width: '225px',
    height: '225px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)' //arrange square into 3x3 board
}

const Board = ({ squares, onClick }) => (
  <div style={style}>
      {squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
  </div>
)


export default Board;

