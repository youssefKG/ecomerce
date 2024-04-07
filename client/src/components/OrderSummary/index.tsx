import { Divider } from "@mui/material";
import "./index.css";
const Ordersummary = () => {
  return (
    <div className="order-summary-container">
      <h1>Order Summary</h1>
      <Divider />
      <div className="prices">
        <div>
          <p>Subtotal</p>
          <p>$123</p>
        </div>
        <Divider />
        <div>
          <p>Discount</p>
          <p>$123</p>
        </div>
        <Divider />
        <div>
          <p>Total</p>
          <p>$123</p>
        </div>
      </div>
      <button>Procced to checkout</button>
    </div>
  );
};
export default Ordersummary;
