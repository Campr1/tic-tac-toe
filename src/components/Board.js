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
    <Square value = "1" onClick={() => onClick("dummy value")} />
    <Square value = "2" onClick={() => onClick("dummy value")} />
    <Square value = "3" onClick={() => onClick("dummy value")} />
    <Square value = "4" onClick={() => onClick("dummy value")} />
    <Square value = "5" onClick={() => onClick("dummy value")} />
    <Square value = "6" onClick={() => onClick("dummy value")} />
    <Square value = "7" onClick={() => onClick("dummy value")} />
    <Square value = "8" onClick={() => onClick("dummy value")} />
    <Square value = "9" onClick={() => onClick("dummy value")} />
  </div>
)

export default Board;

