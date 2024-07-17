import { LiaEllipsisVSolid } from "react-icons/lia";
import { PopoverButton, Popover, PopoverPanel } from "@headlessui/react";
import { TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { ShoppingCartProductType } from "../../types";

interface CartTablePropsType {
  cartProducts: ShoppingCartProductType[];
  incrementCartItemQuantite: (cartItemId: string) => Promise<void>;
  decrementCartItemQuantite: (cartItemId: String) => Promise<void>;
  removeCartItem: (cartItemId: string) => Promise<void>;
}

const CartTable = ({
  cartProducts,
  incrementCartItemQuantite,
  decrementCartItemQuantite,
  removeCartItem,
}: CartTablePropsType) => {
  return (
    <div className="overflow-x-scroll  my-4">
      <table
        className=" w-full min-w-[800px]  self-center overflow-scroll
        lg:mx-auto border-collapse gap-2  p-4 mx-4 text-left  bg-white"
      >
        <thead className="bg-gray-100 p-2">
          <tr className="p-4">
            <th>
              <input type="checkbox" />
            </th>
            <th>
              <p>Porduct</p>
            </th>
            <th>
              <p>Items</p>
            </th>
            <th>
              <p>Price</p>
            </th>
            <th>
              <p>Total</p>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="overflow-x-scroll">
          {cartProducts.map((cartItem) => (
            <tr
              key={cartItem.id}
              className="text-left mx-2 font-semibold text-gray-500 text-sm  "
            >
              <td className="">
                <input type="checkbox" />
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <img
                    className="w-12 h-12 rounded-lg"
                    src="https://www.ikea.com/global/en/images/Alex_Seb_47132_3c77a65654.jpg?f=xxl"
                  />
                  <p className="">{cartItem.product.name}</p>
                </div>
              </td>
              <td>{cartItem.price}</td>
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
                    className="flex items-center bg-gray-100 p-px transition-all hover:opacity-75
                    rounded-full"
                  >
                    <PlusIcon className="size-5" />
                  </button>
                </div>
              </td>
              <td>Free shipping</td>
              <td className="flex items-center text-left">
                <Popover>
                  <PopoverButton className="outline-none">
                    <button className="transition-all hover:bg-slate-100 p-1 rounded-full">
                      <LiaEllipsisVSolid className="text-xl text-black" />
                    </button>
                  </PopoverButton>
                  <PopoverPanel anchor="bottom">
                    <button
                      onClick={() => removeCartItem(cartItem.id)}
                      className="flex gap-1 items-center p-1 px-3 font-medium text-sm text-black hover:opacity-70 bg-gray-100 shadow
                      rounded-full"
                    >
                      <TrashIcon className="size-3" />
                      delete
                    </button>
                  </PopoverPanel>
                </Popover>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
