import { useState, useEffect, useContext } from "react";
import productService from "../../services/products";
import { ResponseI } from "../../api";
import { NotificationContext } from "../../context/NotificationContextProvider";
import { ProductType } from "../../types";

interface UseProductsI {
  bestSellingProducts: ProductType[];
  isBestSellingProductsLoading: boolean;
}

const useProducts = (): UseProductsI => {
  const [bestSellingProducts, setBestSellingProducts] = useState<
    ProductType[] | null
  >(null);
  const [isBestSellingProductsLoading, setIsBestSellingProductsLoading] =
    useState<boolean>(false);
  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
    const fetchBestSellingProducts = async (): Promise<void> => {
      try {
        setIsBestSellingProductsLoading(true);
        const response: ResponseI =
          await productService.getBestSellingProducts();

        setBestSellingProducts(response.data.result);
        console.log(response.data);
      } catch (err) {
        showNotification("error", err.response.data.message);
        console.log(err);
      } finally {
        setIsBestSellingProductsLoading(false);
      }
    };

    fetchBestSellingProducts();
  }, []);

  return {
    bestSellingProducts,
    isBestSellingProductsLoading,
  };
};

export default useProducts;

export type { UseProductsI };
