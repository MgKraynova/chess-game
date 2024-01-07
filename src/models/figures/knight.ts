import { Figure, TFigureProps } from "./figure";
import { COLORS } from "../color";
import blackLogo from "../../assets/black-knight.png";
import whiteLogo from "../../assets/white-knight.png";
import { Cell } from "../cell";
import { FIGURE_NAME } from "../../const/figure-name.const";

export class Knight extends Figure {
  constructor({ color, cell }: TFigureProps) {
    super({ color, cell });
    this.logo = color === COLORS.BLACK ? blackLogo : whiteLogo;
    this.name = FIGURE_NAME.KNIGHT;
  }

  getIsFugureCanMoveToTarget(target: Cell): boolean {
    const isTargetIsTheSameColorOrKing = !super.getIsFugureCanMoveToTarget(
      target
    );

    if (isTargetIsTheSameColorOrKing) {
      return false;
    }

    // у коня всегда смещение на 1 по одной координате и на 2 по другой
    const absX = Math.abs(this.cell.x - target.x);
    const absY = Math.abs(this.cell.y - target.y);

    return (absX === 1 && absY === 2) || (absX === 2 && absY === 1);
  }
}
