import Breadcrumb from "../../components/common/breadcrumbs";
import Button from "../../components/common/button";
import ProductCardsList from "../../components/containers/productCardsList";
import { PlusIcon } from "@heroicons/react/24/outline";

const Products = () => {
  return (
    <div className="flex flex-col gap-2 p-2 py-6 mb-16">
      <div className="flex flex-col gap-2 ">
        <div>
          <h1 className="font-extrabold text-2xl">All Products</h1>
        </div>
        <Breadcrumb links={[{ value: "Products", to: "/Products" }]} />
      </div>
      <ProductCardsList />
      <Button
        className="bg-blue-800 rounded-full p-2 hover:bg-blue-900
        duration-500 ease-in-out absolute bottom-4 right-6"
      >
        <PlusIcon className="size-8 text-white" />
      </Button>
    </div>
  );
};

export default Products;
