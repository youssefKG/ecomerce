import { LiaEllipsisVSolid } from "react-icons/lia";
import { PopoverButton, Popover, PopoverPanel } from "@headlessui/react";
import { TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { ShoppingCartProductType } from "../../types";
import TableSkeleton from "../skeletons/tableSkeleton";

interface CartTablePropsType {
  cartProducts: ShoppingCartProductType[];
  incrementCartItemQuantite: (cartItemId: string) => Promise<void>;
  decrementCartItemQuantite: (cartItemId: string) => Promise<void>;
  removeCartItem: (cartItemId: string) => Promise<void>;
  isCartProductLoading: boolean;
}

const CartTable = ({
  cartProducts,
  incrementCartItemQuantite,
  decrementCartItemQuantite,
  removeCartItem,
  isCartProductLoading,
}: CartTablePropsType) => {
  return (
    <div className="w-full max-h-[85vh] overflow-y-auto min-w-[500px] h-full flex-1 shadow ">
      <table className="w-full min-w-[800px] self-center flex-1 overflow-scroll  border-collapse gap-2  p-4 mx-4 text-left  bg-white">
        <thead className="bg-gray-100 w-full p-2">
          <tr className="p-4">
            <th>
              <input type="checkbox" />
            </th>
            <th>
              <p>Porduct</p>
            </th>
            <th>
              <p>Price</p>
            </th>
            <th>
              <p>Items</p>
            </th>
            <th>
              <p>Total</p>
            </th>
            <th>more</th>
          </tr>
        </thead>
        <tbody className="overflow-x-scroll flex-1 h-full border-collapse">
          {!isCartProductLoading ? (
            cartProducts.map((cartItem) => (
              <tr
                key={cartItem.id}
                className="text-left mx-2  border-collapse font-semibold text-gray-500 text-sm  "
              >
                <td className="">
                  <input type="checkbox" />
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    {cartItem.product.imgURLS.map((img: string) => (
                      <img className="w-20 h-20 rounded-lg" src={img} />
                    ))}
                    <p className="font-semibold text-base tracking-wider text-gray-800 ">
                      {cartItem.product.name}
                    </p>
                  </div>
                </td>
                <td>${cartItem.price}</td>
                <td>
                  <div className="flex gap-5">
                    <button
                      onClick={() => decrementCartItemQuantite(cartItem.id)}
                      className="bg-gray-100 p-px transition-all hover:opacity-75 rounded-full"
                    >
                      <MinusIcon className="size-5" />
                    </button>
                    <p className="font-semibold">{cartItem.quantite}</p>
                    <button
                      onClick={() => incrementCartItemQuantite(cartItem.id)}
                      className="flex items-center bg-gray-100 p-px transition-all hover:opacity-75 rounded-full"
                    >
                      <PlusIcon className="size-5" />
                    </button>
                  </div>
                </td>
                <td className="text-base ">
                  ${cartItem.quantite * cartItem.price}
                </td>
                <td className="flex items-center text justify-center text-center  h-full ">
                  <Popover className="text-center flex items-center">
                    <PopoverButton className="outline-none flex items-center transition-all text-center hover:bg-slate-100 p-1 self rounded-full">
                      <LiaEllipsisVSolid className="text-xl text-black" />
                    </PopoverButton>
                    <PopoverPanel anchor="bottom">
                      <button
                        onClick={() => removeCartItem(cartItem.id)}
                        className="flex gap-1 items-center p-1 px-3 font-medium
                        text-sm text-black hover:opacity-70 bg-gray-100 shadow
                        rounded-full"
                      >
                        <TrashIcon className="size-3" />
                        delete
                      </button>
                    </PopoverPanel>
                  </Popover>
                </td>
              </tr>
            ))
          ) : (
            <>
              <TableSkeleton />
              <TableSkeleton />
              <TableSkeleton />
              <TableSkeleton />
              <TableSkeleton />
              <TableSkeleton />
              <TableSkeleton />
              <TableSkeleton />
              <TableSkeleton />
              <TableSkeleton />
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
