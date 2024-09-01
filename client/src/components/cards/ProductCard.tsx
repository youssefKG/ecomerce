import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { IoIosAdd } from "react-icons/io";

interface ProductCardPropsI {
  id: string;
  name: string;
  imgURL: string;
  price: number;
  discount: number;
  rate: number;
}

const ProductCard = ({
  name,
  price,
  imgURL,
  discount,
  id,
  rate,
}: ProductCardPropsI) => {
  return (
    <Link to={`/product-detail/${id}`} className="product-card-container">
      <img src={imgURL} className="product-card-img" />
      {discount !== 0 && <div className="discount">-{discount * 100}%</div>}
      <div className="product-detail">
        <h1 className="title font-semibold">{name}</h1>
        <Rating value={rate} precision={0.5} readOnly size="small" />
        <div>
          <p className="price">
            {discount !== 0 && (
              <span className="text-sm">{`$ ${price + price * discount}`}</span>
            )}
            {` $${price - price * discount}`}
          </p>
          <button className="add">
            <IoIosAdd className="icon" />
          </button>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
