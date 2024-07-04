import { useEffect, useState } from "react";
import { fetch } from "../../config";
import { AxiosResponse } from "axios";
import { shoppingCartProductType } from "../../types";

const useCartProducts = () => {
  const [products, setProducts] = useState<shoppingCartProductType[]>([]);

  useEffect(() => {
    const fetchCartProduct = async (): Promise<void> => {
      try {
        const response: AxiosResponse = await fetch.get("/cart-products");

        if (response.status === 200) {
          setProducts(response.data);
        }
      } catch (err) {
        if (err.status === 401) {
          localStorage.removeItem("currentUser");
        }
        console.log(err);
      }
    };

    fetchCartProduct();
  }, []);

  return [products, setProducts];
};

export default useCartProducts;
