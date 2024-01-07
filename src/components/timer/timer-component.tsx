import { useEffect, useRef, useState } from "react";
import { Player } from "../../models/player";
import { COLORS } from "../../models/color";
import { INITIAL_TIME_FOR_PLAYER } from "./timer.const";

type TProps = {
  restartGame: () => void;
  currentPlayer: Player | null;
};

export const Timer = ({ restartGame, currentPlayer }: TProps) => {
  const [blackTime, setBlackTime] = useState(INITIAL_TIME_FOR_PLAYER);
  const [whiteTime, setWhiteTime] = useState(INITIAL_TIME_FOR_PLAYER);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  const decrementTimeByOneSecond = (previousTime: number) => previousTime - 1;

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    timer.current = setInterval(() => {
      if (currentPlayer?.color === COLORS.WHITE) {
        setWhiteTime(decrementTimeByOneSecond);
      } else {
        setBlackTime(decrementTimeByOneSecond);
      }
    }, 1000);
  };

  const handleRestartGame = () => {
    setBlackTime(INITIAL_TIME_FOR_PLAYER);
    setWhiteTime(INITIAL_TIME_FOR_PLAYER);
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
