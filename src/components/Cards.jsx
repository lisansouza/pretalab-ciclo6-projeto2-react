import { list } from "../data/subjects";
import { Card } from "./Card";

export const Cards = () => {
  return (
    <div className="cards">
      {list.map((item) => {
        return <Card subject={item} />;
      })}
    </div>
  );
};
