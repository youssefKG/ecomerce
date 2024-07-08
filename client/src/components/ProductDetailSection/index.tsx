import { HeartButton } from "../buttons";
import { ProductDataType } from "../../types";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ProductSkeleton } from "../skeletons";
import { Rating, Divider } from "@mui/material";
import "./index.css";

interface ProductDetailSectionPropsType {
  productData: ProductDataType;
  isLoading: boolean;
  quantite: number;
  incrementProductQuantite: () => void;
  decrementProductQuantite: () => void;
  addProductToCart: () => Promise<void>;
}

const ProductDetailSection = ({
  productData,
  incrementProductQuantite,
  decrementProductQuantite,
  addProductToCart,
  isLoading,
  quantite,
}: ProductDetailSectionPropsType) => {
  return isLoading ? (
    <ProductSkeleton />
  ) : (
    <section className="product">
      <div className="images-container">
        <div className="small-imgs-container">
          <img src="https://www.ikea.com/ma/fr/images/products/tillstaellning-porte-serviettes-couleur-laiton__0895944_pe629480_s5.jpg?f=xxxs" />
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
            <h1>{productData?.name}</h1>
            <button onClick={() => {}}>
              <HeartButton isRed={true} />
            </button>
          </div>
          <div className="price">
            <p>£{productData?.price}</p>
            <Divider orientation="vertical" flexItem />
            <Rating value={4} name="disabled" disabled size="medium" />
            <p>({productData?.rate} reviews)</p>
            <p>(stock {productData?.stock})</p>
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
                <button
                  className="increment-btn"
                  onClick={decrementProductQuantite}
                >
                  <FaMinus />
                </button>
                <input value={quantite} readOnly className="nums-items-input" />
                <button
                  className="decriment-btn"
                  onClick={incrementProductQuantite}
                >
                  <FaPlus />
                </button>
              </div>
              <button onClick={addProductToCart} className="add-items">
                Add To Cart
              </button>
            </div>
            <button onClick={() => {}} className="buy-now-btn">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
