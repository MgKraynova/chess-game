import { Figure, TFigureProps, FIGURE_NAME } from "./figure";
import { COLORS } from "../color";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor({ color, cell }: TFigureProps) {
    super({ color, cell });
    this.logo = color === COLORS.BLACK ? blackLogo : whiteLogo;
    this.name = FIGURE_NAME.KING;
  }
}
