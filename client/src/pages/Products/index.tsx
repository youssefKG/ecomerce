import ProductsCollections from "../../components/ProductsCollection";
import FilterDrawer from "../../components/filterDrawer";
import "./index.css";
import useFilterProducts from "../../hooks/Filter";

const Products = () => {
  const {
    price,
    categorys,
    sortBy,
    rate,
    isFilterDrawerOpen,
    toggleFilterDrawer,
    handleSortByChange,
    handlePriceChange,
    handleRateChange,
    handleCategoryChange,
  } = useFilterProducts();

  return (
    <div className="w-full">
      <FilterDrawer
        isFilterDrawerOpen={isFilterDrawerOpen}
        sortBy={sortBy}
        price={price}
        categorys={categorys}
        rate={rate}
        toggleFilterDrawer={toggleFilterDrawer}
        handleRateChange={handleRateChange}
        handlePriceChange={handlePriceChange}
        handleSortByChange={handleSortByChange}
        handleCategoryChange={handleCategoryChange}
      />
      <ProductsCollections
        toggleFilterDrawer={toggleFilterDrawer}
        isFilterDrawerOpen={isFilterDrawerOpen}
      />
    </div>
  );
};

export default Products;
