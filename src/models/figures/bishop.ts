import { FIGURE_NAME, Figure, TFigureProps } from "./figure";
import { COLORS } from "../color";
import blackLogo from "../../assets/black-bishop.png";
import whiteLogo from "../../assets/white-bishop.png";
import { Cell } from "../cell";

export class Bishop extends Figure {
  constructor({ color, cell }: TFigureProps) {
    super({ color, cell });
    this.logo = color === COLORS.BLACK ? blackLogo : whiteLogo;
    this.name = FIGURE_NAME.BISHOP;
  }

  getIsFugureCanMoveToTarget = (target: Cell) => {
    super.getIsFugureCanMoveToTarget(target)

    return true
  };
}
