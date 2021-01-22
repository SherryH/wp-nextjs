import React, { useState, useMemo, useContext, useEffect } from "react";
import { getCart } from "../pages/lib/api";

const CartContext = React.createContext({});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  console.log("cart", cart);
  useEffect(async () => {
    // get the cart response on refresh
    // TODO: read the cart value from localStorage later
    const newCart = await getCart();
    setCart(newCart);
  }, []);
  const contextValue = useMemo(() => ({ cart, setCart }), [cart, setCart]);
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  const { cart, setCart } = useContext(CartContext);
  return { cart, setCart };
};

export default CartContext;
