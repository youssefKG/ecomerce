import { HeartButton } from "../buttons";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Rating, Divider } from "@mui/material";
import "./index.css";
interface ProductDetailSectionProps {
  isFavoris: boolean;
}
const ProductDetailSection = ({ isFavoris }: ProductDetailSectionProps) => {
  return (
    <section className="product">
      <div className="images-container">
        <div className="small-imgs-container">
          <img src="https://www.ikea.com/ma/fr/images/products/tillstaellning-porte-serviettes-couleur-laiton__0895944_pe629480_s5.jpg?f=xxxs" />
          <img src="https://www.ikea.com/ma/fr/images/products/tillstaellning-porte-serviettes-couleur-laiton__0895944_pe629480_s5.jpg?f=xxxs" />
          <img src="https://www.ikea.com/ma/fr/images/products/tillstaellning-porte-serviettes-couleur-laiton__0895944_pe629480_s5.jpg?f=xxxs" />
        </div>
        <img
          className="big-img"
          src="https://www.ikea.com/ma/fr/images/products/tillstaellning-porte-serviettes-couleur-laiton__0895944_pe629480_s5.jpg?f=xxxs"
        />
      </div>
      <div className="product-info">
        <div className="header">
          <div className="title">
            <h1>Double Bed & Side Bed</h1>
            <HeartButton isRed={isFavoris} />
          </div>
          <div className="price">
            <p>£230</p>
            <Divider orientation="vertical" flexItem />
            <Rating value={4} name="disabled" disabled size="medium" />
            <p>(23 reviews)</p>
          </div>
        </div>
        <Divider />
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </li>
            <li>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </li>
            <li>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </li>
          </ul>
          <div className="btns">
            <div className="add-to-cart-btns">
              <div className="add-item">
                <button className="increment-btn">
                  <FaMinus />
                </button>
                <input className="nums-items-input" value={1} />
                <button className="decriment-btn">
                  <FaPlus />
                </button>
              </div>
              <button className="add-items">Add To Cart</button>
            </div>
            <button className="buy-now-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetailSection;
