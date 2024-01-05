import { Figure, TFigureProps, FIGURE_NAME } from "./figure";
import { COLORS } from "../color";
import blackLogo from "../../assets/black-queen.png";
import whiteLogo from "../../assets/white-queen.png";
import { Cell } from "../cell";

export class Queen extends Figure {
  constructor({ color, cell }: TFigureProps) {
    super({ color, cell });
    this.logo = color === COLORS.BLACK ? blackLogo : whiteLogo;
    this.name = FIGURE_NAME.QUEEN;
  }

  getIsFugureCanMoveToTarget = (target: Cell) => {
    super.getIsFugureCanMoveToTarget(target);

    const queenCanMoveToTargetByVerticalLine =
      this.cell.getIsEmptyVerticalLine(target);

    if (target.x === 3) {
      console.log("target", target);

      console.log(
        "queenCanMoveToTargetByVerticalLine",
        queenCanMoveToTargetByVerticalLine
      );
    }

    if (queenCanMoveToTargetByVerticalLine) {
      return true;
    }

    return false;
  };
}
