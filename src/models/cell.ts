import { Board } from "./board";
import { COLORS } from "./color";
import { Figure } from "./figures/figure";

export type initialParams = {
  board: Board;
  x: number;
  y: number;
  color: COLORS;
  figure: Figure | null;
};

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: COLORS;
  figure: Figure | null;
  board: Board;
  available: boolean;
  id: number;

  constructor({ board, x, y, color, figure }: initialParams) {
    this.x = x;
    this.y = y;
    this.board = board;
    this.color = color;
    this.figure = figure;
    this.available = false;
    this.id = Math.random();
  }

  moveFigure = (target: Cell) => {
    if (this.figure && this.figure.getIsFugureCanMoveToTarget(target)) {
      this.figure.moveFigure(target);

      if (target.figure) {
        this.addFiguresToLost(target.figure);
      }

      target.figure = this.figure;
      target.figure.cell = target;
      this.figure = null;
    }
  };

  getIsCellEmpty = () => {
    return this.figure === null;
  };

  getIsEmptyHorisontalLine = (target: Cell) => {
    if (this.y !== target.y) {
      return false;
    }

    const minValue = Math.min(this.x, target.x);
    const maxValue = Math.max(this.x, target.x);

    for (let x = minValue + 1; x < maxValue; x++) {
      const cellToCheck = this.board.getCell(x, target.y);

      const isCellToCheckFilled = !cellToCheck.getIsCellEmpty();

      if (isCellToCheckFilled) {
        return false;
      }
    }
    return true;
  };

  getIsEmptyVerticalLine = (target: Cell) => {
    if (this.x !== target.x) {
      return false;
    }

    const minValue = Math.min(this.y, target.y);
    const maxValue = Math.max(this.y, target.y);

    for (let y = minValue + 1; y < maxValue; y++) {
      const cellToCheck = this.board.getCell(target.x, y);

      const isCellToCheckFilled = !cellToCheck.getIsCellEmpty();

      if (isCellToCheckFilled) {
        return false;
      }
    }

    return true;
  };

  getIsEmptyDiagonalLine = (target: Cell) => {
    const absX = Math.abs(target.x - this.x);
    const absY = Math.abs(target.y - this.y);
    const isDiagonalCell = absX === absY;

    if (!isDiagonalCell) {
      return false;
    }

    const isTargetAheadByXCoordinate = target.x - this.x > 0;

    const isTargetAheadByYCoordinate = target.y - this.y > 0;

    // i = 1, т к при 0 будет проверяться текущая ячейка
    for (let i = 1; i < absX; i++) {
      const xCoordinateOfNextCell = isTargetAheadByXCoordinate
        ? this.x + i
        : this.x - i;
      const yCoordinateOfNextCell = isTargetAheadByYCoordinate
        ? this.y + i
        : this.y - i;

      const isNextCellEmpty = this.board
        .getCell(xCoordinateOfNextCell, yCoordinateOfNextCell)
        .getIsCellEmpty();

      if (!isNextCellEmpty) {
        return false;
      }
    }

    return true;
  };

  getIsTargerCellCanBeAttacked = (target: Cell) => {
    if (target.figure) {
      return this.figure?.color !== target.figure?.color;
    }

    return false;
  };

  addFiguresToLost = (figure: Figure) => {
    if (figure.color === COLORS.BLACK) {
      this.board.lostBlackFigures.push(figure);
    } else {
      this.board.lostWhiteFigures.push(figure);
    }
  };
}
