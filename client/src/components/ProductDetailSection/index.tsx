import { HeartButton } from "../buttons";
import { ProductDataType, ProductType } from "../../types";
import { ProductSkeleton } from "../skeletons";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { Rating, Divider } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

interface ProductDetailSectionPropsType {
  productData: ProductType;
  isLoading: boolean;
  quantite: number;
  incrementProductQuantite: () => void;
  decrementProductQuantite: () => void;
  addProductToCart: () => Promise<void>;
  isAddProductLoading: boolean;
}

const ProductDetailSection = ({
  productData,
  incrementProductQuantite,
  decrementProductQuantite,
  addProductToCart,
  isLoading,
  quantite,
  isAddProductLoading,
}: ProductDetailSectionPropsType) => {
  return isLoading ? (
    <ProductSkeleton />
  ) : (
    productData && (
      <section className="flex lg:grid items-center grid-cols-1 2xl:grid-cols-6 lg:grid-cols-4  gap-6 justify-center">
        <div className="flex w-full sm:flex-row flex-col-reverse 2xl:col-start-2 lg:col-start-1 items-center row-start-1 col-span-2 gap-1">
          <div className="flex sm:flex-col w-full h-24   items-center gap-2 sm:w-[20%] overflow-y-scroll max-h-80">
            {productData.imgURLS.map((img: string, i: number) => {
              return <img src={img} key={i} />;
            })}
            <img src="https://www.ikea.com/ma/fr/images/products/tillstaellning-porte-serviettes-couleur-laiton__0895944_pe629480_s5.jpg?f=xxxs" />
            <img src="https://www.ikea.com/ma/fr/images/products/tillstaellning-porte-serviettes-couleur-laiton__0895944_pe629480_s5.jpg?f=xxxs" />
            <img src="https://www.ikea.com/ma/fr/images/products/tillstaellning-porte-serviettes-couleur-laiton__0895944_pe629480_s5.jpg?f=xxxs" />
          </div>
          {productData.imgURLS.map((img) => {
            return (
              <img
                className="w-full sm:w-[80%] max-h-[350px] rounded-lg"
                src={img}
              />
            );
          })}
        </div>
        <div className="flex  flex-col 2xl:col-start-4 lg:col-span-2 row-start-1  justify-center h-full gap-8  ">
          <div className="flex flex-col gap-2 ">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-gray-800 text-xl">
                {productData?.name}
              </h1>
              <button onClick={() => {}}>
                <HeartButton isRed={true} />
              </button>
            </div>
            <div className="flex gap-4 font-semibold text-gray-500 text-sm">
              <p className="font-bold">£{productData?.price}</p>
              <Divider orientation="vertical" flexItem />
              <Rating value={4} name="disabled" disabled size="medium" />
              <p>({productData?.rate} reviews)</p>
              <p>(stock {productData?.stock})</p>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col gap-5">
            <p className="text-gray-600 font-medium text-sm">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim Lorem ipsum dolor sit amet, officia excepteur
              ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
              pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
              excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
              aliquip amet voluptate Lorem ipsum dolor sit amet, officia
              excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi
              Lorem pariatur mollit ex esse exercitation amet. Nisi anim
              cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
              Lorem est aliquip amet voluptate labore culpa sint ad nisi Lorem
              pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
              excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
              aliquip amet voluptate Lorem ipsum dolor sit amet, officia
              excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi
              Lorem pariatur mollit ex esse exercitation amet. Nisi anim
              cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
              Lorem est aliquip amet voluptate reprehenderit enim labore culpa
              sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
              anim cupidatat excepteur officia. Reprehenderit nostrud nostrud
              ipsum Lorem est aliquip amet voluptate
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center ">
                <div className="flex items-center text-black gap-4 ">
                  <button
                    className="p-1 bg-gray-100 rounded-full shadow"
                    onClick={decrementProductQuantite}
                  >
                    <MinusIcon className="size-4" />
                  </button>
                  <p className="font-semibold text-xl text-gray-600">
                    {quantite}
                  </p>
                  <button
                    className="p-1 bg-gray-100 rounded-full shadow"
                    onClick={incrementProductQuantite}
                  >
                    <PlusIcon className="size-4" />
                  </button>
                </div>
                <button
                  onClick={addProductToCart}
                  disabled={isAddProductLoading}
                  className="text-white text-center p-1 flex justify-center
                  text-sm transition-all hover:bg-opacity-90 shadow w-full
                  font-medium bg-gray-700 rounded-lg"
                >
                  {isAddProductLoading ? (
                    <RotatingLines
                      visible={true}
                      width="20"
                      strokeWidth="3"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                      strokeColor="gray"
                    />
                  ) : (
                    <p>Add to cart</p>
                  )}
                </button>
              </div>
              <button
                className="text-white text-sm text-center p-1 transition-all hover:bg-opacity-90 shadow w-full font-medium bg-gray-700 rounded-lg"
                onClick={() => {}}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default ProductDetailSection;
