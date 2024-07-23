import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context";
import {
  useReview,
  UseReviewI,
  useProductDetail,
  UseProductDetailI,
} from "../../hooks";
import ProductReviewsSection from "../../components/ProductReviewsSection";
import ProductDetailSection from "../../components/ProductDetailSection";
import SimillarProductSection from "../../components/SimilarProducdsSection";
import AddReview from "../../components/ProductReviewsSection/AddReview";
import "./index.css";

const ProductDetail = () => {
  const { product_id } = useParams();
  const { checkAuth } = useContext(AuthContext);

  const {
    productData,
    isProductDataLoading,
    simillarProducts,
    isSimillarProductsLoading,
    toogleLike,
    quantite,
    incrementProductQuantite,
    decrementProductQuantite,
    addProductToCart,
    isAddProductLoading,
  }: UseProductDetailI = useProductDetail(product_id);

  const {
    handleStarsRatingChange,
    handleChange,
    isPostReviewLoading,
    postReview,
    isReviewsLoading,
    formReview,
    reviews,
  }: UseReviewI = useReview(product_id);

  return (
    <div className="product-detail-container">
      <ProductDetailSection
        productData={productData}
        isLoading={isProductDataLoading}
        incrementProductQuantite={incrementProductQuantite}
        quantite={quantite}
        decrementProductQuantite={decrementProductQuantite}
        addProductToCart={() => checkAuth(addProductToCart)()}
        isAddProductLoading={isAddProductLoading}
      />

      <section className="product-reviews-section">
        <ProductReviewsSection
          reviews={reviews}
          toggleLike={() => checkAuth(toogleLike)}
          isLoading={isReviewsLoading}
        />

        <AddReview
          postReview={postReview}
          handleChange={handleChange}
          handleStarsRatingChange={handleStarsRatingChange}
          formReview={formReview}
          isPostReviewLoading={isPostReviewLoading}
        />
      </section>
      <SimillarProductSection
        simillarProducts={simillarProducts}
        isLoading={isSimillarProductsLoading}
      />
    </div>
  );
};

export default ProductDetail;
