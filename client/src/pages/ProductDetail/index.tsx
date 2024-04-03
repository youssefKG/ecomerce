import ProductReviewsSection from "../../components/ProductReviewsSection";
import ProductDetailSection from "../../components/ProductDetailSection";
import "./index.css";
function ProductDetail() {
  return (
    <div className="product-detail-container">
      <ProductDetailSection />
      <ProductReviewsSection />
    </div>
  );
}

export default ProductDetail;
