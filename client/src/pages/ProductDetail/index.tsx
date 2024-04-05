import { ChangeEvent, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsDetail } from "../../api";
import { FormDataOfReviewType, ProductDetailType } from "../../types";
import ProductDetailSkeleton from "./ProductDetailSkeleton";
import ProductReviewsSection from "../../components/ProductReviewsSection";
import ProductDetailSection from "../../components/ProductDetailSection";
import SimillarProductSection from "../../components/SimilarProducdsSection";
import AddReview from "../../components/ProductReviewsSection/AddReview";
import "./index.css";
function ProductDetail() {
  const { product_id } = useParams();
  const [product, setProduct] = useState<ProductDetailType | null>(null);
  const [isLaoding, setIsLaoding] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormDataOfReviewType>({
    firstName: "",
    lastName: "",
    review: "",
    rate: 0,
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    console.log(e.target.value, e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const fetchProductDetail = async () => {
    try {
      setIsLaoding(true);
      await getProductsDetail().then((data) => setProduct(data));
      setIsLaoding(false);
    } catch (err) {
      setIsLaoding(false);
      console.log(err);
    }
  };

  useEffect((): void => {
    fetchProductDetail();
  }, [product_id]);
  console.log(formData);
  return isLaoding ? (
    <ProductDetailSkeleton />
  ) : (
    <div className="product-detail-container">
      <ProductDetailSection isFavoris={product ? product.isFavoris : false} />
      <section className="product-reviews-section">
        <ProductReviewsSection />
        <AddReview
          formData={formData}
          handleChange={handleChange}
          handleRating={(e: unknown, newValue: number) =>
            setFormData({ ...formData, rate: newValue })
          }
        />
      </section>
      <SimillarProductSection />
    </div>
  );
}
export default ProductDetail;
