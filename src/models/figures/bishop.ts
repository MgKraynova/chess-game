import { Figure, TFigureProps } from "./figure";
import { COLORS } from "../color";
import blackLogo from "../../assets/black-bishop.png";
import whiteLogo from "../../assets/white-bishop.png";
import { Cell } from "../cell";
import { FIGURE_NAME } from "../../const/figure-name.const";

export class Bishop extends Figure {
  constructor({ color, cell }: TFigureProps) {
    super({ color, cell });
    this.logo = color === COLORS.BLACK ? blackLogo : whiteLogo;
    this.name = FIGURE_NAME.BISHOP;
  }

  getIsFugureCanMoveToTarget(target: Cell): boolean {
    const isTargetIsTheSameColorOrKing = !super.getIsFugureCanMoveToTarget(
      target
    );

    if (isTargetIsTheSameColorOrKing) {
      return false;
    }
    const isCanMoveToTargetByDiagonalLine =
      this.cell.getIsEmptyDiagonalLine(target);

    if (isCanMoveToTargetByDiagonalLine) {
      return true;
    }

    return false;
  }
}
