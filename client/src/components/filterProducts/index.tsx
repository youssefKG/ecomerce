import ListCat from "./ListCat";
import Price from "./Price";
import { furnitureCategoriesData } from "../../utils/index";
import "./index.css";
const FilterProducts = () => {
  return (
    <div className="filter-container">
      <div className="cat-filter-container">
        <h1>ALL CaTegories </h1>
        <div className="lsit-catogogries-container">
          {furnitureCategoriesData.map((cat) => (
            <ListCat
              items={cat.items}
              key={cat.categoryName}
              categoryName={cat.categoryName}
            />
          ))}
        </div>
      </div>
      <Price />
    </div>
  );
};
export default FilterProducts;
