import { getCart } from "./lib/api";

const Cart = () => {
  return (
    <>
      <h1 className="text-3xl">Cart</h1>
      <div className="min-w-full">
        <div className="flex flex-wrap min-w-full">
          <div className="flex-1"></div>
          <div className="flex-1"></div>
          <div className="flex-1">Product</div>
          <div className="flex-1">Quantity</div>
          <div className="flex-1">Price</div>
          <div className="flex-1">Total</div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex-1">
            <td>x</td>
          </div>
          <div className="flex-1">
            <td>Picture of Product</td>
          </div>
          <div className="flex-1">
            <td>Product Name</td>
          </div>
          <div className="flex-1">
            <td>5</td>
          </div>
          <div className="flex-1">
            <td>€2</td>
          </div>
          <div className="flex-1">
            <td>€10</td>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
