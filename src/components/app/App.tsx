import { useEffect, useState } from "react";
import "./App.css";
import { BoardComponent } from "../board/board-component";
import { Board } from "../../models/board";
import { Player } from "../../models/player";
import { COLORS } from "../../models/color";
import { Timer } from "../timer/timer-component";

export const App = () => {
  const whitePlayer = new Player(COLORS.WHITE);
  const blackPlayer = new Player(COLORS.BLACK);

  const [board, setBoard] = useState(new Board());
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = (): void => {
    const newBoard = new Board();

    newBoard.initCells();
    newBoard.addFigures();

    setBoard(newBoard);
    setCurrentPlayer(whitePlayer);
  };

  const switchPlayer = () => {
    setCurrentPlayer(
      currentPlayer?.color === COLORS.BLACK ? whitePlayer : blackPlayer
    );
  };

  return (
    <div className="app">
      <Timer restartGame={startNewGame} currentPlayer={currentPlayer} />
      <BoardComponent
        currentPlayer={currentPlayer}
        switchPlayer={switchPlayer}
        board={board}
        setBoard={setBoard}
      />
    </div>
  );
};
