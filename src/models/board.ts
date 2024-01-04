import { Cell } from "./cell";
import { COLORS } from "./color";

export class Board {
  cells: Cell[][] = [];

  public initCells = () => {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];

      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(
            new Cell({
              x: j,
              y: i,
              board: this,
              color: COLORS.BLACK,
              figure: null,
            })
          );
        } else {
          row.push(
            new Cell({
              x: j,
              y: i,
              board: this,
              color: COLORS.WHITE,
              figure: null,
            })
          );
        }
      }

      this.cells.push(row);
    }
  };
}
