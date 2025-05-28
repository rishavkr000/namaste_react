// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemInfo from "./ItemInfo";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router";
const Cart = () => {
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     // console.log("Functional SetInterval called");
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //     // console.log("Functional SetInterval stopped.");
  //   };
  // }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddItem = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="flex justify-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
      </div>
      <div className="flex justify-center m-4 p-4">
        {cartItem.length === 0 && <h1>Your cart is empty. Add something from the menu</h1>}
      </div>
      <div className="w-6/12 m-auto">
        <ItemInfo data={cartItem} buttonType={"Remove"} />
      </div>
      <div className="flex justify-center m-4 p-4">
        {cartItem.length !== 0 ? (
          <div>
            <button
              className="bg-blue-300 m-2 p-2 rounded-xl"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <button
              className="bg-blue-300 m-2 p-2 rounded-xl"
              onClick={handleAddItem}
            >
              Add Items
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-300 m-2 p-2 rounded-xl"
            onClick={handleAddItem}
          >
            Browse Restaurants
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
