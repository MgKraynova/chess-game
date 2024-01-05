import { Board } from "./../board";
import { Figure, TFigureProps, FIGURE_NAME } from "./figure";
import { COLORS } from "../color";
import blackLogo from "../../assets/black-pawn.png";
import whiteLogo from "../../assets/white-pawn.png";
import { Cell } from "../cell";

export class Pawn extends Figure {
  isFirstMove = true;

  constructor({ color, cell }: TFigureProps) {
    super({ color, cell });
    this.logo = color === COLORS.BLACK ? blackLogo : whiteLogo;
    this.name = FIGURE_NAME.PAWN;
  }

  moveFigure = (target: Cell) => {
    super.moveFigure(target);
    this.isFirstMove = false;
  };

  getIsFugureCanMoveToTarget(target: Cell): boolean {
    const isTargetIsTheSameColorOrKing = !super.getIsFugureCanMoveToTarget(
      target
    );

    if (isTargetIsTheSameColorOrKing) {
      return false;
    }

    const stepWithDirection = this.cell.figure?.color === COLORS.BLACK ? 1 : -1;

    const twoStepsWithDirection =
      this.cell.figure?.color === COLORS.BLACK ? 2 : -2;

    const isOneStepToTarget = target.y === this.cell.y + stepWithDirection;
    const isTwoStepsToTarget = target.y === this.cell.y + twoStepsWithDirection;

    const isTargetInVerticalLine = this.cell.x === target.x;

    const isTargetIsEmpty = this.cell.board
      .getCell(target.x, target.y)
      .getIsCellEmpty();

    if (isTargetInVerticalLine && isTargetIsEmpty) {
      if (isOneStepToTarget) {
        return true;
      }

      if (this.isFirstMove && isTwoStepsToTarget) {
        return true;
      }

      return false;
    }

    return false;
  }
}
