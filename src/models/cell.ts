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

    for (let x = minValue + 1; x <= maxValue; x++) {
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
    return true;
  };
}
