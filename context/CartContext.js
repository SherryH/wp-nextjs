import React, { useState, useMemo } from "react";

const CartContext = React.createContext({});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const contextValue = useMemo(() => ({ cart, setCart }), [cart, setCart]);
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
