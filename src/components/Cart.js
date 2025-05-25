import { useEffect } from "react";

const Cart = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Functional SetInterval called");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Functional SetInterval stopped.");
    };
  }, []);

  return (
    <div>
      <h1>Cart Page</h1>
    </div>
  );
};

export default Cart;
