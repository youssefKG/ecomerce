import { CategoryFilterType, SortByType } from "../../types";
import { Divider, Drawer, Slider, Rating } from "@mui/material";
import {
  AdjustmentsVerticalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChangeEvent } from "react";

interface IFilterDrawer {
  isFilterDrawerOpen: boolean;
  sortBy: SortByType;
  rate: number;
  price: number[];
  categorys: CategoryFilterType;
  handlePriceChange: (_, newValue: number | number[]) => void;
  handleRateChange: (_, newValue: number) => void;
  toggleFilterDrawer: (value: boolean) => void;
  handleSortByChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FilterDrawer = ({
  isFilterDrawerOpen,
  rate,
  price,
  sortBy,
  categorys,
  toggleFilterDrawer,
  handlePriceChange,
  handleRateChange,
  handleSortByChange,
  handleCategoryChange,
}: IFilterDrawer) => {
  return (
    <Drawer open={isFilterDrawerOpen} onClose={() => toggleFilterDrawer(false)}>
      <div className="flex flex-col p-4 gap-2  min-w-96 bg-gray-50 h-full ">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <AdjustmentsVerticalIcon className="size-6" />
            <h1 className="font-semibold tracking-wide">Filter</h1>
          </div>
          <button onClick={() => toggleFilterDrawer(false)}>
            <XMarkIcon className="size-5" />
          </button>
        </div>
        <Divider />
        <div className="flex gap-1 flex-col">
          <p className="font-semibold text-gray-600">Price: </p>
          <div className="flex gap-2 justify-center font-semibold text-gray-500 text-sm items-center">
            <p>{price[0]}$</p>
            <Slider
              value={price}
              getAriaLabel={() => "Temperature range"}
              onChange={handlePriceChange}
              max={1500}
              sx={{
                color: "blue",
                height: 4,
                width: 220,
                "& .MuiSlider-thumb": {
                  width: 8,
                  height: 8,
                  transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                  "&::before": {
                    boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                  },
                  "&.Mui-active": {
                    width: 10,
                    height: 10,
                  },
                },
                "& .MuiSlider-rail": {
                  opacity: 0.28,
                },
              }}
            />
            <p>{price[1]} $</p>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gpa-2 justify-center">
          <p className="font-semibold text-gray-600">Rating: </p>
          <Rating
            value={rate}
            onChange={handleRateChange}
            name="simple-controlled"
            className="mx-auto"
          />
        </div>
        <Divider />
        <div className="flex gap-2 flex-col">
          <p className="font-semibold text-gray-600">Sort by: </p>
          <ul className="ml-6 flex flex-col gap-1 text-sm font-medium tracking-wide text-gray-500">
            <li className=" flex justify-between w-full">
              <p>Best Selling</p>
              <input
                checked={sortBy.bestSelling}
                onChange={handleSortByChange}
                name="bestSelling"
                className=""
                type="checkbox"
              />
            </li>
            <li className=" flex justify-between w-full">
              <button>Rating</button>
              <input
                name="rating"
                checked={sortBy.rating}
                className=""
                type="checkbox"
                onChange={handleSortByChange}
              />
            </li>
            <li className=" flex justify-between w-full">
              <p>Price: Low to to High</p>
              <input
                name="priceLowToHigh"
                checked={sortBy.priceLowToHigh}
                onChange={handleSortByChange}
                className=""
                type="checkbox"
              />
            </li>
            <li className=" flex justify-between w-full">
              <p>Price: High to Low</p>
              <input
                checked={sortBy.priceHighToLow}
                onChange={handleSortByChange}
                name="priceHighToLow"
                className=""
                type="checkbox"
              />
            </li>
            <li className=" flex justify-between w-full">
              <p>Newest</p>
              <input
                onChange={handleSortByChange}
                checked={sortBy.newest}
                name="newest"
                className=""
                type="checkbox"
              />
            </li>
            <li className=" flex justify-between w-full">
              <p>Oldest</p>
              <input
                name="oldest"
                checked={sortBy.oldest}
                onChange={handleSortByChange}
                className=""
                type="checkbox"
              />
            </li>
          </ul>
        </div>
        <Divider />
        <div className="flex gap-2 flex-col">
          <p className="font-semibold text-gray-600">Categorys: </p>
          <ul className="ml-6 flex flex-col gap-1 text-sm font-medium tracking-wide text-gray-500">
            <li className=" flex justify-between w-full">
              <button>Beds</button>
              <input
                name="beds"
                checked={categorys.beds}
                className=""
                onChange={handleCategoryChange}
                type="checkbox"
              />
            </li>
            <li className=" flex justify-between w-full">
              <button>Seating</button>
              <input
                name="seating"
                checked={categorys.seating}
                className=""
                onChange={handleCategoryChange}
                type="checkbox"
              />
            </li>
            <li className=" flex justify-between w-full">
              <p>Tables</p>
              <input
                name="tables"
                onChange={handleCategoryChange}
                checked={categorys.tables}
                type="checkbox"
              />
            </li>
            <li className=" flex justify-between w-full">
              <p>Storage</p>
              <input
                name="storage"
                onChange={handleCategoryChange}
                checked={categorys.storage}
                type="checkbox"
              />
            </li>
            <li className=" flex justify-between w-full">
              <p>Decorations</p>
              <input
                name="decoration"
                onChange={handleCategoryChange}
                checked={categorys.decoration}
                type="checkbox"
              />
            </li>
          </ul>
        </div>
      </div>
    </Drawer>
  );
};

export default FilterDrawer;
