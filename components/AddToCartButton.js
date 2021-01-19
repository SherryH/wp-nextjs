import { addToCart } from "../pages/lib/api";
const AddToCartButton = ({ showButton, productId }) => {
  // when the button is clicked, call the addToCart api, pass in the product databaseId
  const handleClick = () => {
    addToCart({ input: { productId } });
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
