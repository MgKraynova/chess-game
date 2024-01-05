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
    const isTargetIsTheSameColorOrKing = !super.getIsFugureCanMoveToTarget(
      target
    );

    if (isTargetIsTheSameColorOrKing) {
      return false;
    }
    
    const queenCanMoveToTargetByVerticalLine =
      this.cell.getIsEmptyVerticalLine(target);

    const queenCanMoveToTargetByHorizontalLine =
      this.cell.getIsEmptyHorisontalLine(target);

    if (queenCanMoveToTargetByVerticalLine) {
      return true;
    }

    if (queenCanMoveToTargetByHorizontalLine) {
      return true;
    }

    return false;
  };
}
