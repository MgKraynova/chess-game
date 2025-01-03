import { Figure, TFigureProps } from "./figure";
import { COLORS } from "../color";
import blackLogo from "../../assets/black-queen.png";
import whiteLogo from "../../assets/white-queen.png";
import { Cell } from "../cell";
import { FIGURE_NAME } from "../../const/figure-name.const";

export class Queen extends Figure {
  constructor({ color, cell }: TFigureProps) {
    super({ color, cell });
    this.logo = color === COLORS.BLACK ? blackLogo : whiteLogo;
    this.name = FIGURE_NAME.QUEEN;
  }

  getIsFugureCanMoveToTarget = (target: Cell) => {
    const isTargetIsTheSameColorOrKing = !super.getIsFugureCanMoveToTarget(
      target
    );

    if (isTargetIsTheSameColorOrKing) {
      return false;
    }

    const isCanMoveToTargetByVerticalLine =
      this.cell.getIsEmptyVerticalLine(target);

    const isCanMoveToTargetByHorizontalLine =
      this.cell.getIsEmptyHorisontalLine(target);

    const isCanMoveToTargetByDiagonalLine =
      this.cell.getIsEmptyDiagonalLine(target);

    if (isCanMoveToTargetByVerticalLine) {
      return true;
    }

    if (isCanMoveToTargetByHorizontalLine) {
      return true;
    }

    if (isCanMoveToTargetByDiagonalLine) {
      return true;
    }

    return false;
  };
}
