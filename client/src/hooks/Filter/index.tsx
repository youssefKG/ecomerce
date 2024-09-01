import { ChangeEvent, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationContext } from "../../context";
import { SortByType, CategoryFilterType, ProductType } from "../../types";
import productService from "../../services/products";
import { ResponseI } from "../../api";

interface IUseFilterProducts {
  products: ProductType[];
  isLoading: boolean;
  isFilterDrawerOpen: boolean;
  categorys: CategoryFilterType;
  rate: number[];
  price: number[];
  sortBy: SortByType;
  handleRateChange: (newValues: number[]) => void;
  handlePriceChange: (_, newValue: number | number[]) => void;
  toggleFilterDrawer: (newValue: boolean) => void;
  handleSortByChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const useFilterProducts = (): IUseFilterProducts => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState<boolean>(true);
  const [price, setPrice] = useState<number[]>([0, 2000]);
  const [rate, setRate] = useState<number[]>([0, 5]);
  const [sortBy, setSortBy] = useState<SortByType>({
    priceLowToHigh: true,
    priceHighToLow: true,
    rating: true,
    oldest: true,
    newest: true,
    bestSelling: true,
  });
  const [categorys, setCategorys] = useState<CategoryFilterType>({
    beds: true,
    seating: true,
    tables: true,
    storage: true,
    decoration: true,
  });

  const { showNotification } = useContext(NotificationContext);

  const navigate = useNavigate();
  const urlSearchParams = new URLSearchParams(window.location.search);

  const handlePriceChange = (_, newValue: number | number[]) => {
    setPrice(newValue as number[]);
    urlSearchParams.set("max_pirce", newValue[1]);
    urlSearchParams.set("min_pirce", newValue[0]);
    const query = urlSearchParams.toString();
    navigate(`/products?${query}`);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue = !categorys[event.target.name];
    if (!newValue) {
      urlSearchParams.delete(event.target.name);
    } else {
      const urlParamsValue: "true" | "false" = newValue ? "true" : "false";
      urlSearchParams.set(event.target.name, urlParamsValue);
    }
    setCategorys((prevCategory: CategoryFilterType) => ({
      ...prevCategory,
      [event.target.name]: !categorys[event.target.name],
    }));
    navigate(`/products?${urlSearchParams.toString()}`);
  };

  const handleRateChange = (newValues: number[]) => {
    urlSearchParams.set("max_rate", newValues[1].toString());
    urlSearchParams.set("min-rate", newValues[0].toString());

    navigate(`/products?${urlSearchParams.toString()}`);
    setRate(newValues);
    console.log("rate", rate);
  };

  const toggleFilterDrawer = (value: boolean): void => {
    setIsFilterDrawerOpen(value);
  };

  const handleSortByChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!sortBy[event.target.name]) {
      const newValue: string = sortBy[event.target.name] ? "false" : "true";
      urlSearchParams.set(event.target.name, newValue);
    } else {
      urlSearchParams.delete(event.target.name);
    }
    setSortBy({ ...sortBy, [event.target.name]: !sortBy[event.target.name] });
    const query = urlSearchParams.toString();
    navigate(`/products?${query}`);
  };

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const response: ResponseI = await productService.findProducts(
          categorys,
          rate,
          price,
        );

        console.log("response from filrer hooks", response);
        setProducts(response.data.result);
      } catch (err) {
        console.log(err);
        showNotification("error", err.response.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [sortBy, categorys, price, rate]);

  useEffect(() => {
    // get data from url params and set it to sortBy state
    for (const key in sortBy) {
      if (urlSearchParams.has(key)) {
        const value: boolean =
          urlSearchParams.get(key) === "true" ? true : false;
        setSortBy((prevSortByValues: SortByType) => ({
          ...prevSortByValues,
          [key]: value,
        }));
      }
    }

    // get data from url params and set it to categorys state

    for (const key in categorys) {
      if (urlSearchParams.has(key)) {
        const value: boolean =
          urlSearchParams.get(key) === "true" ? true : false;
        setCategorys((prevCategorys: CategoryFilterType) => ({
          ...prevCategorys,
          [key]: value,
        }));
      }
    }

    if (urlSearchParams.has("min_pirce")) {
      const min_pirce: number = +urlSearchParams.get("min_pirce");
      const max_pirce: number = +urlSearchParams.get("max_pirce");
      setPrice([min_pirce, max_pirce]);
    }
  }, []);
  return {
    products,
    price,
    categorys,
    sortBy,
    rate,
    isFilterDrawerOpen,
    toggleFilterDrawer,
    handleSortByChange,
    handlePriceChange,
    handleRateChange,
    handleCategoryChange,
    isLoading,
  };
};

export default useFilterProducts;

export type { IUseFilterProducts };
