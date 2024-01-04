import "../App.css";
import { Cell } from "../models/cell";

type TCellComponentProps = {
  cell: Cell;
};

export const CellComponent = ({ cell }: TCellComponentProps) => {
  return <div className={["cell", cell.color.toLowerCase()].join(" ")}></div>;
};
