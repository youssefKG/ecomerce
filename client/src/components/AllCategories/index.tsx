import { useState } from "react";
import "./index.css";
import ListCat from "./ListCat";
import { furnitureCategoriesData } from "../../utils/index";
const AllCategories = () => {
  return (
    <div className="filter-container">
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
  );
};
export default AllCategories;
