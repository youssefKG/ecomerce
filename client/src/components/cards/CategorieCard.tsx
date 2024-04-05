import { useState } from "react";
import "./index.css";
interface CategorieProps {
  title: string;
  imgsURL: string[];
}
const CategorieCard = ({ title, imgsURL }: CategorieProps) => {
  const [indexImageActive, setIndexImageActive] = useState<number>(0);
  return (
    <div className="categorie-card-container">
      <img src={imgsURL[indexImageActive]} />
      <h1 className="title">{title}</h1>
    </div>
  );
};
export default CategorieCard;
