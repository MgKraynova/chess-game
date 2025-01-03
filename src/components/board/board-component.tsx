import { useState } from "react";
import "./board.css";
import { Board } from "../../models/board";
import { CellComponent } from "../cell/cell-component";
import { Cell } from "../../models/cell";
import { Player } from "../../models/player";
import { COLORS } from "../../models/color";
import { LostFigures } from "../lost-figures/lost-figures-component";

type TBoardComponentProps = {
  board: Board;
  setBoard: (board: Board) => void;
  switchPlayer: () => void;
  currentPlayer: Player | null;
};

export const BoardComponent = ({
  board,
  setBoard,
  currentPlayer,
  switchPlayer,
}: TBoardComponentProps) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const handleSelectCell = (cell: Cell) => {
    const isClickOnEnemyFigure =
      cell.figure && cell.figure?.color !== currentPlayer?.color;

    // выделяем или снимаем выделение с фигуры
    if (cell.figure && !isClickOnEnemyFigure) {
      const isSecondClickAtSelectedCell =
        selectedCell?.x === cell.x && selectedCell?.y === cell.y;

      const newSelectedCell = isSecondClickAtSelectedCell ? null : cell;

      setSelectedCell(newSelectedCell);
      highlightCells(newSelectedCell);
    }

    // ходим, после хода снимаем выделение
    if (
      cell !== selectedCell &&
      selectedCell?.figure?.getIsFugureCanMoveToTarget(cell)
    ) {
      selectedCell.moveFigure(cell);

      switchPlayer();

      setSelectedCell(null);
      highlightCells(selectedCell);
    }
  };

  const highlightCells = (newSelectedCell: Cell | null) => {
    board.highlightCells(newSelectedCell);

    updateBoard();
  };

  const updateBoard = () => {
    const copyOfBoard = board.getCopy();

    setBoard(copyOfBoard);
  };

  return (
    <div>
      <h3>
         Текущий игрок -{" "}
        {currentPlayer?.color === COLORS.BLACK ? "черный" : "белый"}
      </h3>
      <div className="boardContainer">
        <div className="board">
          {board.cells.map((row) =>
            row.map((cell, cellIndex) => (
              <CellComponent
                isSelected={
                  selectedCell?.x === cell.x && selectedCell?.y === cell.y
                }
                cell={cell}
                key={cellIndex}
                handleSelectCell={handleSelectCell}
              />
            ))
          )}
        </div>
        <div>
          <LostFigures
            title="Съеденные белые фигуры"
            lostFigures={board.lostWhiteFigures}
          />
          <LostFigures
            title="Съеденные черные фигуры"
            lostFigures={board.lostBlackFigures}
          />
        </div>
      </div>
    </div>
  );
};
