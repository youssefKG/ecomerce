import { categoriesData } from "../../utils";
import { CategorieCard } from "../cards";
import "./index.css";
const Categories = () => {
  return (
    <div className="categories-section-container">
      <div className="categories-header">
        <h1>View Our Range Of Categories</h1>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
      <div className="cards-container">
        <CategorieCard
          title={categoriesData[0].title}
          imgsURL={categoriesData[0].imgsURL}
        />
        <div>
          <CategorieCard
            title={categoriesData[1].title}
            imgsURL={categoriesData[1].imgsURL}
          />
          <CategorieCard
            title={categoriesData[2].title}
            imgsURL={categoriesData[2].imgsURL}
          />
        </div>
        <CategorieCard
          title={categoriesData[3].title}
          imgsURL={categoriesData[3].imgsURL}
        />
      </div>
    </div>
  );
};
export default Categories;
