import "./cell.css";
import { Cell } from "../../models/cell";

type TCellComponentProps = {
  cell: Cell;
  isSelected: boolean;
  handleSelectCell: (cell: Cell) => void;
};

export const CellComponent = ({
  cell,
  isSelected,
  handleSelectCell,
}: TCellComponentProps) => {
  return (
    <div
      className={[
        "cell",
        cell.color.toLowerCase(),
        cell.available && cell.figure ? "figureCanBeTaken" : "",
        isSelected ? "selectedCell" : "",
      ].join(" ")}
      onClick={() => handleSelectCell(cell)}
    >
      {cell.available && !cell.figure && <div className="availableCell" />}
      {cell.figure?.logo && (
        <img
          className="figureImage"
          src={cell.figure?.logo}
          alt={cell.figure.name}
        />
      )}
    </div>
  );
};
