import { useEffect, useState } from "react";
import "./App.css";
import { BoardComponent } from "./components/board-component";
import { Board } from "./models/board";
import { Player } from "./models/player";
import { COLORS } from "./models/color";

export const App = () => {
  const [board, setBoard] = useState(new Board());

  const [whitePlayer, setWhitePlayer] = useState(new Player(COLORS.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(COLORS.BLACK));
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
      <BoardComponent currentPlayer={currentPlayer} switchPlayer={switchPlayer} board={board} setBoard={setBoard} />
    </div>
  );
};
