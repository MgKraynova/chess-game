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
}
