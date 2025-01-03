import { Cell } from "../cell";
import { COLORS } from "../color";
import Logo from "../../assets/black-bishop.png";
import { FIGURE_NAME } from "../../const/figure-name.const";

export type TFigureProps = {
  color: COLORS;
  cell: Cell;
};

export class Figure {
  color: COLORS;
  logo: typeof Logo | null;
  cell: Cell;
  name: FIGURE_NAME;
  id: number;

  constructor({ color, cell }: TFigureProps) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.logo = null;
    this.name = FIGURE_NAME.FIGURE;
    this.id = Math.random();
  }

  getIsFugureCanMoveToTarget(target: Cell) {
    if (this?.cell?.figure?.color === target.figure?.color) {
      return false;
    }

    if (target.figure?.name === FIGURE_NAME.KING) {
      return false;
    }

    return true;
  }

  moveFigure(target: Cell) {}
}
