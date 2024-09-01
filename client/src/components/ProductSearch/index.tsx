import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks";
import productService from "../../services/products";
import ProductsSearchSkeletons from "../skeletons/searchProducts";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Divider } from "@mui/material";
import { ResponseI } from "../../api";

type ProductSearch = {
  id: string;
  name: string;
  imgURLS: string;
};

const ProductSearch = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const [products, setProducts] = useState<ProductSearch[] | null>(null);
  const debounceSearchValue = useDebounce(inputValue, 1000);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setProducts(null);
  };

  const handleSearchProduct = (productId: string) => {
    setProducts(null);
    setInputValue("");
    navigate(`/product-detail/${productId}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(null);
        const response: ResponseI =
          await productService.searchForProducts(debounceSearchValue);

        if (response.data.result.length) setProducts(response.data.result);
        console.log("product from search backdrop ", response.data.result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [debounceSearchValue]);

  return (
    <Popover className="relative z-40">
      <div
        className="flex gap-1 relative justify-between items-center border
          border-gray-500 px-2 rounded-xl font-medium bg-gray-50/10 text-white "
      >
        <PopoverButton className="absolute  left-1/2 -bottom-0"></PopoverButton>
        <input
          className="rounded-xl outline-none flex-1 tracking-wide bg-none bg-transparent"
          placeholder="Search for product"
          value={inputValue}
          onChange={handleSearchInputChange}
        />
        <MagnifyingGlassIcon className="size-5" />
      </div>
      {debounceSearchValue.length >= 2 && (
        <PopoverPanel
          anchor="bottom"
          static
          className="mt-2  z-40 transition ease-out text-gray-800 duration-400 from-neutral-800
        bg-white data-[closed]:scale-95 data-[closed]:opacity-0 flex flex-col gap-1
        border-collapse border border-gray-100-200  shadow font-semibold w-72 text-sm rounded-md"
        >
          {products ? (
            products.map((product: ProductSearch) => (
              <>
                <button
                  onClick={() => handleSearchProduct(product.id)}
                  className="flex p-1  gap-4 text-center items-center hover:bg-white transition-all "
                >
                  <img src={product.imgURLS[0]} className="size-14" />
                  <p className="text-gray-800">{product.name}</p>
                </button>
                <Divider />
              </>
            ))
          ) : (
            <ProductsSearchSkeletons />
          )}
        </PopoverPanel>
      )}
    </Popover>
  );
};

export default ProductSearch;
