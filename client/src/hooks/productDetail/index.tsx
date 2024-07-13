import { useState, useEffect } from "react";
import { ProductType, ProductDataType } from "../../types";
import productDetailService from "../../services/productDetail";
import cartService from "../../services/cart";
import { useSnackbar } from "notistack";
import { ResponseI } from "../../api";

interface UseProductDetailI {
  isProductDataLoading: boolean;
  isSimillarProductsLoading: boolean;
  productData: ProductDataType;
  quantite: number;
  simillarProducts: ProductType[];
  toogleLike: (reviewId: string, value: boolean) => Promise<void>;
  incrementProductQuantite: () => void;
  decrementProductQuantite: () => void;
  addProductToCart: (productId: string, quantite: string) => Promise<void>;
}

const useProductDetailt = (productId: string): UseProductDetailI => {
  const [productData, setProductData] = useState<ProductDataType | null>(null);
  const [simillarProducts, setSimillarProducts] = useState<ProductType[]>([]);
  const [isProductDataLoading, setIsProductDataLoading] =
    useState<boolean>(true);
  const [isSimillarProductsLoading, setIsSimillarProductsLoading] =
    useState<boolean>(true);
  const [quantite, setQuantite] = useState<number>(1);
  const { enqueueSnackbar } = useSnackbar();

  const toogleLike = async (
    reviewId: string,
    value: boolean, // take a new value of like
  ): Promise<void> => {
    try {
      await productDetailService.toogleReviewLike(`/review/like-review`, {
        reviewId,
        value,
      });
      enqueueSnackbar(
        "The product has been added to your favorites successfully!",
        { variant: "success" },
      );
    } catch (err) {
      enqueueSnackbar(err.response.data.message, { variant: "error" });
      console.log(err);
    }
  };

  const addProductToCart = async (): Promise<void> => {
    try {
      const response: ResponseI = await cartService.addProductToCart(
        productId,
        quantite,
      );

      if (response.status === 200) {
        enqueueSnackbar(
          "The product has been added to your cart successfully!",
          { variant: "success" },
        );
      }
    } catch (err) {
      enqueueSnackbar(err.response.data.message, { variant: "error" });
      console.log(err);
    }
  };

  const incrementProductQuantite = () => {
    if (productData.stock <= quantite) {
      enqueueSnackbar(
        "we currently do not have the requested quantity in stock.",
        {
          variant: "error",
        },
      );
    } else setQuantite(quantite + 1);
  };

  const decrementProductQuantite = () => {
    if (quantite > 1) setQuantite(quantite - 1);
    else {
      enqueueSnackbar(
        "The minimum quantity you can add to the cart for this item is one.",
        { variant: "error" },
      );
    }
  };

  useEffect(() => {
    const fetchProductData = async (): Promise<void> => {
      try {
        setIsProductDataLoading(true);
        const response: ResponseI =
          await productDetailService.getProductDetail(productId);
        console.log("product data ", response);

        console.log("end loading");
        if (response.status === 200) {
          setProductData(response.data.result);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsProductDataLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  useEffect(() => {
    const fetchSimillarProducts = async () => {
      try {
        setIsSimillarProductsLoading(true);

        const response: ResponseI =
          await productDetailService.getSimillarProducts(
            `/product-detail/${productId}`,
          );

        if (response.status === 200) {
          setSimillarProducts(response.data.result);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsSimillarProductsLoading(false);
      }
    };
    fetchSimillarProducts();
  }, [productId]);

  return {
    productData,
    quantite,
    simillarProducts,
    isSimillarProductsLoading,
    isProductDataLoading,
    toogleLike,
    incrementProductQuantite,
    decrementProductQuantite,
    addProductToCart,
  };
};

export default useProductDetailt;
export type { UseProductDetailI };
