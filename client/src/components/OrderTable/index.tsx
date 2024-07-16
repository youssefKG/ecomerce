import { LiaEllipsisVSolid } from "react-icons/lia";
import ordersData from "../../utils/ordersData";

const OrdersTable = () => {
  return (
    <table
      className="lg:w-5/6 w-full self-center overflow-x-scroll
        lg:mx-auto border-collapse gap-2  p-4 text-left m-7 bg-white"
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
      <tbody>
        {ordersData.map((order) => (
          <tr className="text-left font-semibold text-gray-500 text-sm  ">
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
              <button className="transition-all hover:bg-slate-100 p-1 rounded-full">
                <LiaEllipsisVSolid className="text-xl text-black" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
