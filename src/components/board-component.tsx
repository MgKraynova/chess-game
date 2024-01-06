import { useEffect, useState } from "react";
import "../App.css";
import { Board } from "../models/board";
import { CellComponent } from "./cell-component";
import { Cell } from "../models/cell";
import { FIGURE_NAME, Figure } from "../models/figures/figure";
import { Player } from "../models/player";
import { COLORS } from "../models/color";

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
    // if (selectedCell?.figure?.name === FIGURE_NAME.QUEEN) {
    debugger;
    // }

    const isClickOnEnemyFigure =
      cell.figure && cell.figure?.color !== currentPlayer?.color;

    // ДОБАВИТЬ ЛОГИКУ при клике на недоступную клетку во время хода снимаем выделение фигуры
    // if (selectedCell && !cell.available) {
    //   setSelectedCell(null);
    //   highlightCells(null);
    //   return;
    // }

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
    </div>
  );
};
