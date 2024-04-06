import "./index.css";
import { IoSearch } from "react-icons/io5";
import { productsData } from "../../utils";
import { ProductCard } from "../cards";
import { Pagination, Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
interface PropsType {
  filters: string[] | null;
  handleDeleteFilter: (filter: string) => void;
  handleDeleteAllFilters: () => void;
}
const ProductsCollections = ({
  filters,
  handleDeleteFilter,
  handleDeleteAllFilters,
}: PropsType) => {
  return (
    <div className="products-collections-container">
      <h1> Our Collection of products</h1>
      <div className="search-container">
        <input type="text" placeholder="Search for item" />
        <button>
          <IoSearch />
        </button>
      </div>
      <div className="chips-filters-container">
        {filters &&
          filters.map((filter: string, i: number) => (
            <Chip
              variant="outlined"
              deleteIcon={<DeleteIcon />}
              key={i}
              label={filter}
              onDelete={() => handleDeleteFilter(filter)}
            />
          ))}
        {filters && filters.length ? (
          <Chip
            variant="outlined"
            label="Clear All"
            onClick={handleDeleteAllFilters}
          />
        ) : null}
      </div>
      <div className="cards-container">
        {productsData.map((product, i) => (
          <ProductCard
            product_id={product.id}
            key={i}
            title={product.title}
            price={product.price}
            imgURL={product.imgURL}
            discount={product.discount}
          />
        ))}
      </div>
      <Pagination count={10} size="medium" color="primary" variant="outlined" />
    </div>
  );
};
export default ProductsCollections;
