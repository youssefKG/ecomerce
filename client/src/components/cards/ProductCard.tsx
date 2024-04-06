import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
interface Props {
  title: string;
  description?: string;
  price: number;
  imgURL: string;
  discount: number;
  product_id: string;
}
const ProductCard = ({ title, price, imgURL, discount, product_id }: Props) => {
  return (
    <Link
      to={`/product-detail/${product_id}`}
      className="product-card-container"
    >
      <img src={imgURL} className="product-card-img" />
      <div className="discount">-{discount}%</div>
      <div className="product-detail">
        <h1 className="title">{title}</h1>
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
