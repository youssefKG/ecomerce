import { useCart, UseCartI } from "../../hooks";
import CartTable from "../../components/CartTable";
import "./index.css";

const Cart = () => {
  const {
    incrementCartItemQuantite,
    cartProducts,
    decrementCartItemQuantite,
    removeCartItem,
    isCartProductLoading,
  }: UseCartI = useCart();
  return (
    <CartTable
      cartProducts={cartProducts}
      incrementCartItemQuantite={incrementCartItemQuantite}
      decrementCartItemQuantite={decrementCartItemQuantite}
      removeCartItem={removeCartItem}
      isCartProductLoading={isCartProductLoading}
    />
  );
};
export default Cart;
