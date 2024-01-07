import { Figure, TFigureProps } from "./figure";
import { COLORS } from "../color";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";
import { Cell } from "../cell";
import { FIGURE_NAME } from "../../const/figure-name.const";

export class King extends Figure {
  constructor({ color, cell }: TFigureProps) {
    super({ color, cell });
    this.logo = color === COLORS.BLACK ? blackLogo : whiteLogo;
    this.name = FIGURE_NAME.KING;
  }

  getIsFugureCanMoveToTarget(target: Cell): boolean {
    const isTargetIsTheSameColorOrKing = !super.getIsFugureCanMoveToTarget(
      target
    );

    if (isTargetIsTheSameColorOrKing) {
      return false;
    }

    const isTargetEqualsCurrentCell =
      target.x === this.cell.x && target.y === this.cell.y;

    if (isTargetEqualsCurrentCell) {
      return false;
    }

    const absX = Math.abs(this.cell.x - target.x);
    const absY = Math.abs(this.cell.y - target.y);

    return (absX === 0 || absX === 1) && (absY === 0 || absY === 1);
  }
}
