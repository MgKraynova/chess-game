import "../App.css";
import { Board } from "../models/board";
import { CellComponent } from "./cell-component";

type TBoardComponentProps = {
  board: Board;
  setBoard: (board: Board) => void;
};

export const BoardComponent = ({ board, setBoard }: TBoardComponentProps) => {
  console.log("board.cells", board.cells);
  return (
    <div className="board">
      {board.cells.map((row) =>
        row.map((cell, cellIndex) => (
          <CellComponent cell={cell} key={cellIndex} />
        ))
      )}
    </div>
  );
};
