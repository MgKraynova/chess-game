import { Cell } from "./cell";
import { COLORS } from "./color";
import { Bishop } from "./figures/bishop";
import { King } from "./figures/king";
import { Knight } from "./figures/knight";
import { Pawn } from "./figures/pawn";
import { Queen } from "./figures/queen";
import { Rook } from "./figures/rook";

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

  public getCell = (x: number, y: number) => {
    return this.cells[y][x];
  };

  private addBishops = () => {
    new Bishop({ color: COLORS.BLACK, cell: this.getCell(2, 0) });
    new Bishop({ color: COLORS.WHITE, cell: this.getCell(2, 7) });

    new Bishop({ color: COLORS.BLACK, cell: this.getCell(5, 0) });
    new Bishop({ color: COLORS.WHITE, cell: this.getCell(5, 7) });
  };

  private addKings = () => {
    new King({ color: COLORS.BLACK, cell: this.getCell(4, 0) });
    new King({ color: COLORS.WHITE, cell: this.getCell(4, 7) });
  };

  private addKnights = () => {
    new Knight({ color: COLORS.BLACK, cell: this.getCell(1, 0) });
    new Knight({ color: COLORS.WHITE, cell: this.getCell(1, 7) });

    new Knight({ color: COLORS.BLACK, cell: this.getCell(6, 0) });
    new Knight({ color: COLORS.WHITE, cell: this.getCell(6, 7) });
  };

  private addPawns = () => {
    for (let i = 0; i < 8; i++) {
      new Pawn({ color: COLORS.BLACK, cell: this.getCell(i, 1) });
      new Pawn({ color: COLORS.WHITE, cell: this.getCell(i, 6) });
    }
  };

  private addQueens = () => {
    new Queen({ color: COLORS.BLACK, cell: this.getCell(3, 0) });
    new Queen({ color: COLORS.WHITE, cell: this.getCell(3, 7) });
  };

  private addRooks = () => {
    new Rook({ color: COLORS.BLACK, cell: this.getCell(0, 0) });
    new Rook({ color: COLORS.WHITE, cell: this.getCell(0, 7) });

    new Rook({ color: COLORS.BLACK, cell: this.getCell(7, 0) });
    new Rook({ color: COLORS.WHITE, cell: this.getCell(7, 7) });
  };

  public addFigures = () => {
    this.addPawns();
    this.addBishops();
    this.addKings();
    this.addQueens();
    this.addRooks();
    this.addKnights();
  };

  public highlightCells = (selectedCell: Cell | null) => {
    for (let i = 0; i < this.cells.length; i++) {
      const currentRow = this.cells[i];

      for (let j = 0; j < currentRow.length; j++) {
        const possibleTarget = currentRow[j];

        possibleTarget.available =
          selectedCell?.figure?.getIsFugureCanMoveToTarget(possibleTarget) ||
          false;
      }
    }
  };

  public getCopy = () => {
    const boardCopy  = new Board();

    boardCopy.cells = this.cells;

    return boardCopy;
  }
}
