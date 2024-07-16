import { CalendarIcon } from "@heroicons/react/16/solid";
import OrdersTable from "../../components/OrderTable";

const Orders = () => {
  return (
    <div className="self-start flex-col gap-10  justify-center w-full">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">Orders</h1>
        <div className="flex gap-2">
          <button
            className=" hover:opacity-80 shadow border-solid bg-white border-gray-300
          transition-all px-4 border py-1 rounded-full font-semibold text-sm"
          >
            Export
          </button>
          <button
            className=" hover:opacity-80 shadow border-solid bg-white  border-gray-300
          transition-all px-4 border   py-1 rounded-full font-semibold text-sm"
          >
            Create Orders
          </button>
        </div>
      </div>
      <div
        className="flex mt-6 flex-wrap bg-white  font-bold justify-between
        gap-5 divide-x  divide-gray-200 p-4 shadow rounded-lg "
      >
        <div className="flex gap-2 pr-5 justify-center items-center">
          <CalendarIcon className="text-xl text-black w-8 h-8" />
          <p>Today</p>
        </div>
        <div className="flex flex-col justify-center pl-2  gap-2">
          <p className="text-xs font-semibold text-gray-500 ">Total Orders</p>
          <p className="text-">43</p>
        </div>
        <div className="flex flex-col pl-2 justify-center  gap-2">
          <p className="text-xs font-semibold text-gray-500 ">
            Ordered items by time
          </p>
          <p className="text-">343</p>
        </div>
        <div className="flex flex-col pl-2 justify-center  gap-2">
          <p className="text-xs font-semibold text-gray-500 ">Returns</p>
          <p className="text-">6</p>
        </div>
        <div className="flex flex-col justify-center pl-2 gap-2">
          <p className="text-xs font-semibold text-gray-600 ">
            Fulfiled order over time
          </p>
          <p className="text-">311</p>
        </div>
        <div className="flex flex-col justify-center pl-2  gap-2">
          <p className="text-xs font-semibold text-gray-600 ">
            Delivered orders over time
          </p>
          <p className="text-">511</p>
        </div>
      </div>
      <OrdersTable />
    </div>
  );
};

export default Orders;
