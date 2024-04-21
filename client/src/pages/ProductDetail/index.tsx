import { ChangeEvent, useState, useEffect, useContext, FormEvent } from "react";
import { useParams } from "react-router-dom";
import { AuthContext, ShoppingCartContext } from "../../context";
import { useSnackbar } from "notistack";
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
  const { currentUser, handleOpenLoginBackdrop } = useContext(AuthContext);
  const { addProductToShoppingCart } = useContext(ShoppingCartContext);
  const { enqueueSnackbar } = useSnackbar();
  const [product, setProduct] = useState<ProductDetailType | null>(null);
  const [productQuantite, setProductQuantite] = useState<number>(1);
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
  const handlePostReview = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    try {
      if (currentUser) {
        console.log(currentUser);
      } else {
        handleOpenLoginBackdrop();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleBuyNow = async (): Promise<void> => {
    try {
      if (currentUser) {
        console.log(currentUser);
      } else handleOpenLoginBackdrop();
    } catch (err) {
      console.log(err);
    }
  };
  const incrementProductQuantite = (): void => {
    if (productQuantite < product.stock)
      setProductQuantite(productQuantite + 1);
    else if (productQuantite >= product.stock)
      enqueueSnackbar("Not enough stock", { variant: "error" });
  };
  const decrementProductQuantite = (): void => {
    if (productQuantite >= 2) setProductQuantite(productQuantite - 1);
    else enqueueSnackbar("minimum quantite", { variant: "error" });
  };
  const addToFavoris = async (): Promise<void> => {
    try {
      if (currentUser) {
        if (product?.isFavoris)
          enqueueSnackbar("Removed from favoris", { variant: "success" });
        else
          enqueueSnackbar("Added to favoris", {
            variant: "success",
          });
        setProduct({ ...product, isFavoris: !product.isFavoris });
      } else {
        handleOpenLoginBackdrop();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect((): void => {
    console.log("product detail : ", document.referrer);
    fetchProductDetail();
  }, [product_id]);
  console.log(formData);

  return isLaoding ? (
    <ProductDetailSkeleton />
  ) : (
    <div className="product-detail-container">
      <ProductDetailSection
        isFavoris={product ? product?.isFavoris : false}
        currentUser={currentUser}
        handleBuyNow={handleBuyNow}
        productQuantite={productQuantite}
        incrementProductQuantite={incrementProductQuantite}
        decrementProductQuatite={decrementProductQuantite}
        addToFavoris={addToFavoris}
        addProductToShoppingCart={() =>
          addProductToShoppingCart({
            ...product,
            quatite: productQuantite,
            isSeen: false,
          })
        }
      />
      <section className="product-reviews-section">
        <ProductReviewsSection />
        <AddReview
          handlePostReview={handlePostReview}
          currentUser={currentUser}
          handleOpenLoginBackdrop={handleOpenLoginBackdrop}
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
