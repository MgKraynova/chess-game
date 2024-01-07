import { Figure } from "../models/figures/figure";
import "../App.css";

type TProps = {
  title: string;
  lostFigures: Figure[];
};

export const LostFigures = ({ title, lostFigures }: TProps) => {
  console.log(title, lostFigures);
  return (
    <div className="lostFiguresContainer">
      <h2>{title}</h2>
      {lostFigures.map((item) => {
        return (
          <div className="lostFiguresTitleContainer">
            <h4>{item.name}</h4>
            <img
              width="20"
              height="20"
              src={item.logo || undefined}
              alt={item.name}
            />
          </div>
        );
      })}
    </div>
  );
};
