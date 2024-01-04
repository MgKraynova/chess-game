import { useEffect, useState } from "react";
import "./App.css";
import { BoardComponent } from "./components/board-component";
import { Board } from "./models/board";

export const App = () => {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = (): void => {
    const newBoard = new Board();

    newBoard.initCells();
    newBoard.addFigures();

    setBoard(newBoard);
  };

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};
