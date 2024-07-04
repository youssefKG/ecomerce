import { useEffect, useState, SetStateAction, Dispatch } from "react";
import { AxiosResponse } from "axios";
import { fetch } from "../../config";
import { ProductType } from "../../types";

const useBesSellingProducts = (): [
  ProductType,
  Dispatch<SetStateAction<ProductType>>,
] => {
  const [products, setProducts] = useState<ProductType | null>(null);
  useEffect(() => {
    const fetchBestSellingProducts = async (): Promise<void> => {
      try {
        const res: AxiosResponse = await fetch.get("/best-selling-products");
        const data = res.data;
        setProducts(data.result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBestSellingProducts();
  }, []);

  return [products, setProducts];
};

const useFeaturedProducts = (): [
  ProductType,
  Dispatch<SetStateAction<ProductType>>,
] => {
  const [products, setProducts] = useState<ProductType | null>(null);
  useEffect(() => {
    const fetchBestSellingProducts = async (): Promise<void> => {
      try {
        const res: AxiosResponse = await fetch.get("/best-selling-products");
        const data = res.data;
        setProducts(data.result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBestSellingProducts();
  }, []);

  return [products, setProducts];
};
export { useBesSellingProducts, useFeaturedProducts };
