import React, { useContext } from "react";
import { addToCart, getCart } from "../pages/lib/api";
import CartContext from "../context/CartContext";
const AddToCartButton = ({ showButton, productId }) => {
  const { setCart } = useContext(CartContext);
  // when the button is clicked, call the addToCart api, pass in the product databaseId
  const handleClick = async () => {
    await addToCart({ input: { productId } });
    const cart = await getCart();
    // save to the cartContext
    setCart(cart);
  };
  if (!showButton) return null;
  return (
    <button
      onClick={handleClick}
      className="border-2 border-gray-500 font-bold text-gray-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-gray-500 hover:text-white mt-2"
    >
      {" "}
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
