import { LiaEllipsisVSolid } from "react-icons/lia";
import { PopoverButton, Popover, PopoverPanel } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import ordersData from "../../utils/ordersData";

const OrdersTable = () => {
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
              <p>Order</p>
            </th>
            <th>
              <p>Date</p>
            </th>
            <th>
              <p>Total</p>
            </th>
            <th>
              <p>Payement status</p>
            </th>
            <th>
              <p>Items</p>
            </th>
            <th>
              <p>Delivery method</p>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="overflow-x-scroll">
          {ordersData.map((order) => (
            <tr className="text-left mx-2 font-semibold text-gray-500 text-sm  ">
              <td className="">
                <input type="checkbox" />
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <img className="w-12 h-12 rounded-lg" src={order.imgURL} />
                  <p className="">{order.title}</p>
                </div>
              </td>
              <td className="tracking-tighter">{order.date} Am</td>
              <td>{order.total}</td>
              <td>
                <p>Completed</p>
              </td>
              <td>
                <p>4</p>
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

export default OrdersTable;
