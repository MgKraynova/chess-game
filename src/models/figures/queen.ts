import { Figure, TFigureProps, FIGURE_NAME } from "./figure";
import { COLORS } from "../color";
import blackLogo from "../../assets/black-queen.png";
import whiteLogo from "../../assets/white-queen.png";

export class Queen extends Figure {
  constructor({ color, cell }: TFigureProps) {
    super({ color, cell });
    this.logo = color === COLORS.BLACK ? blackLogo : whiteLogo;
    this.name = FIGURE_NAME.QUEEN;
  }
}
