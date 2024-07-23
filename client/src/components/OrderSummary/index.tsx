import { Divider } from "@mui/material";
import "./index.css";
const Ordersummary = () => {
  return (
    <div className="flex flex-col gap-4 max-w-2xl border h-fit border-solid w-full border-gray-200 p-4 rounded-md">
      <h1 className="font-semibold text-base text-gray-600">Order Summary</h1>
      <Divider />
      <div className="flex flex-col gap-2 text-gray-500 text-sm font-semibold">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p className="text-black">$1238</p>
        </div>
        <Divider />
        <div className="flex justify-between">
          <p>Discount</p>
          <p>$0</p>
        </div>
        <Divider />
        <div className="flex justify-between text-base">
          <p>Grand total</p>
          <p className="text-black">$1238</p>
        </div>
      </div>
      <Divider />
      <button
        className="border border-solid border-gray-200 p-1 rounded-md
        font-medium tracking-wide bg-gray-700 text-white text-sm hover:opacity-90 transition shadow"
      >
        Checkout now
      </button>
    </div>
  );
};
export default Ordersummary;
