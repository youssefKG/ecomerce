import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SortByType, CategoryFilterType } from "../../types";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

interface IUseFilterProducts {
  isFilterDrawerOpen: boolean;
  categorys: CategoryFilterType;
  rate: number;
  price: number[];
  sortBy: SortByType;
  handleRateChange: (_, newValue: number) => void;
  handlePriceChange: (_, newValue: number | number[]) => void;
  toggleFilterDrawer: (newValue: boolean) => void;
  handleSortByChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const useFilterProducts = (): IUseFilterProducts => {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState<boolean>(true);
  const [price, setPrice] = useState<number[]>([0, 2000]);
  const [rate, setRate] = useState<number>(5);
  const [sortBy, setSortBy] = useState<SortByType>({
    priceLowToHigh: false,
    priceHighToLow: false,
    rating: false,
    oldest: false,
    newest: false,
    bestSelling: false,
  });
  const [categorys, setCategorys] = useState<CategoryFilterType>({
    beds: false,
    seating: false,
    tables: false,
    storage: false,
    decoration: false,
  });

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

  const handleRateChange = (_, newValue: number) => {
    urlSearchParams.set("rating", newValue.toString());
    setRate(newValue);
    console.log(rate);
    console.log(urlSearchParams);
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
    console.log(urlSearchParams);
  };

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
  }, [urlSearchParams]);

  return {
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
  };
};

export default useFilterProducts;

export type { IUseFilterProducts };
