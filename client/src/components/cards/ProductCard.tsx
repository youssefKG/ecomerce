import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";

interface ProductCardPropsI {
  id: string;
  name: string;
  imgURL: string;
  price: number;
  discount: number;
}

const ProductCard = ({
  name,
  price,
  imgURL,
  discount,
  id,
}: ProductCardPropsI) => {
  return (
    <Link to={`/product-detail/${id}`} className="product-card-container">
      <img src={imgURL} className="product-card-img" />
      <div className="discount">-{discount}%</div>
      <div className="product-detail">
        <h1 className="title font-semibold">{name}</h1>
        <div>
          <p className="price">
            <span>$2040.00</span>
            {" $" + price}
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
