import { ChangeEvent, useState, useContext, FormEvent } from "react";
import useProductDetail, { UseProductDetailI } from "../../hooks/productDetail";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context"; // notification
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
    reviews,
    isReviewsLoading,
    simillarProducts,
    isSimillarProductsLoading,
    toogleLike,
    postReview,
    quantite,
    incrementProductQuantite,
    decrementProductQuantite,
    addProductToCart,
  }: UseProductDetailI = useProductDetail(product_id);

  return (
    <div className="product-detail-container">
      <ProductDetailSection
        productData={productData}
        isLoading={isProductDataLoading}
        incrementProductQuantite={incrementProductQuantite}
        quantite={quantite}
        decrementProductQuantite={decrementProductQuantite}
        addProductToCart={() => checkAuth(addProductToCart)}
      />

      <section className="product-reviews-section">
        <ProductReviewsSection
          reviews={reviews}
          toggleLike={() => checkAuth(toogleLike)}
          isLoading={isReviewsLoading}
        />

        <AddReview postReview={() => checkAuth(postReview)} />
      </section>
      <SimillarProductSection
        simillarProducts={simillarProducts}
        isLoading={isSimillarProductsLoading}
      />
    </div>
  );
};

export default ProductDetail;
