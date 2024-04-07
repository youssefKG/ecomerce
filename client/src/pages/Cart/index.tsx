import Ordersummary from "../../components/OrderSummary";
import ShopingCart from "../../components/ShoppingCart";
import "./index.css";
function Cart() {
  return (
    <div className="cart-container">
      <ShopingCart />
      <Ordersummary />
    </div>
  );
}

export default Cart;
