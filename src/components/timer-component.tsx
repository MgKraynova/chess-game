import { useEffect, useRef, useState } from "react";
import { Player } from "../models/player";
import { COLORS } from "../models/color";

type TProps = {
  restartGame: () => void;
  currentPlayer: Player | null;
};

export const Timer = ({ restartGame, currentPlayer }: TProps) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    timer.current = setInterval(() => {
      if (currentPlayer?.color === COLORS.WHITE) {
        decrementWhiteTimer();
      } else {
        decrementBlackTimer();
      }
    }, 1000);
  };

  const decrementWhiteTimer = () => {
    setWhiteTime((prevTime) => prevTime - 1);
  };

  const decrementBlackTimer = () => {
    setBlackTime((prevTime) => prevTime - 1);
  };

  const handleRestartGame = () => {
    setBlackTime(300);
    setWhiteTime(300);
    restartGame();
  };

  return (
    <div>
      <div>
        <button onClick={handleRestartGame}>Перезапустить игру</button>
      </div>
      <h2>Черные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
    </div>
  );
};
