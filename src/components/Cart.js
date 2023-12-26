import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  const gradientStyle = {
    background: "linear-gradient(to right, #f00, #f00, #600)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  return (
    <div className="text-center m-4 p-4 h-screen">
      <h1 className="text-2xl font-bold" style={gradientStyle}>
        Cart
      </h1>
      <div className="w-6/12 m-auto">
        <button
          onClick={handleClearCart}
          className="p-2 m-2 bg-black text-white rounded-lg"
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <h1>Your Cart is empty.Please Add items to the cart! </h1>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};
export default Cart;
