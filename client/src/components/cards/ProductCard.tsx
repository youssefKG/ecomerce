import { IoIosAdd } from "react-icons/io";
interface Props {
  title: string;
  description?: string;
  price: number;
  imgURL: string;
  discount: number;
}
const ProductCard = ({ title, price, imgURL, discount }: Props) => {
  return (
    <div className="product-card-container">
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
    </div>
  );
};
export default ProductCard;
