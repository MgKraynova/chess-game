import { Figure, TFigureProps } from "./figure";
import { COLORS } from "../color";
import blackLogo from "../../assets/black-rook.png";
import whiteLogo from "../../assets/white-rook.png";
import { Cell } from "../cell";
import { FIGURE_NAME } from "../../const/figure-name.const";

export class Rook extends Figure {
  constructor({ color, cell }: TFigureProps) {
    super({ color, cell });
    this.logo = color === COLORS.BLACK ? blackLogo : whiteLogo;
    this.name = FIGURE_NAME.ROOK;
  }

  getIsFugureCanMoveToTarget(target: Cell): boolean {
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

    if (isCanMoveToTargetByVerticalLine) {
      return true;
    }

    if (isCanMoveToTargetByHorizontalLine) {
      return true;
    }

    return false;
  }
}
