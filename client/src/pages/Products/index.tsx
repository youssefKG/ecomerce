import { ChangeEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import FilterProducts from "../../components/filterProducts";
import ProductsCollections from "../../components/ProductsCollection";
import "./index.css";
const Products = () => {
  const [filters, setFilters] = useState<string[] | null>(null);
  const handleFilter = (
    filter: string,
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    if (!filters) setFilters([filter]);
    if (filters && !filters.includes(filter)) setFilters([...filters, filter]);
    if (filters && filters.includes(filter))
      setFilters(filters.filter((f) => f !== filter));
  };
  const handleDeleteFilter = (filter: string): void => {
    setFilters(filters.filter((e) => e !== filter));
  };
  const handleDeleteAllFilters = (): void => {
    setFilters(null);
  };
  console.log(filters);
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="products-container">
      <FilterProducts handleFilter={handleFilter} filters={filters} />
      <ProductsCollections
        filters={filters}
        handleDeleteFilter={handleDeleteFilter}
        handleDeleteAllFilters={handleDeleteAllFilters}
      />
    </div>
  );
};
export default Products;
