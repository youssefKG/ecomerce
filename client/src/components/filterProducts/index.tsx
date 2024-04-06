import { ChangeEvent } from "react";
import ListCat from "./ListCat";
import Price from "./Price";
import { furnitureCategoriesData } from "../../utils/index";
import "./index.css";
interface PropsType {
  handleFilter: (filter: string, event: ChangeEvent<HTMLInputElement>) => void;
  filters: string[] | null;
}
const FilterProducts = ({ handleFilter, filters }: PropsType) => {
  return (
    <div className="filter-container">
      <div className="cat-filter-container">
        <h1>ALL CaTegories </h1>
        <div className="lsit-catogogries-container">
          {furnitureCategoriesData.map((cat) => (
            <ListCat
              filters={filters}
              handleFilter={handleFilter}
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
