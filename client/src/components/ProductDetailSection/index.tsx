import { CiHeart } from "react-icons/ci";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { Rating, Divider } from "@mui/material";
import "./index.css";
type PropsHeartButton = { isRed: boolean };
const HeartButton = ({ isRed }: PropsHeartButton) => {
  return (
    <button className="heart-btn">
      {isRed ? (
        <FaHeart className="red-heart" />
      ) : (
        <CiHeart className="heart-icon" />
      )}
    </button>
  );
};
const ProductDetailSection = () => {
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
            <HeartButton isRed={true} />
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
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
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
