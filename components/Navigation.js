import Link from "next/link";
import CartIcon from "./CartIcon";

const Navigation = () => (
  <nav className="p-8 border-b-2 sticky top-0 bg-white z-10 flex">
    <div className="text-gray-700 text-2xl uppercase items-center flex-grow flex">
      <div className="max-w-8 mr-8">
        <Link href="/">
          <img src="http://www.inbrackets.dev/fancy-lab-theme/wp-content/uploads/2019/03/cropped-fancy-lab-logo.png" />
        </Link>
      </div>
      <div className="pr-6">
        <Link href="/">
          <a href="/">About Us</a>
        </Link>
      </div>
      <div className="pr-6">
        <Link href="/posts">
          <a href="/posts">Accessories</a>
        </Link>
      </div>
      <div className="pr-6">
        <Link href="/posts">
          <a href="/posts">Clothing</a>
        </Link>
      </div>
    </div>
    <CartIcon />
  </nav>
);

export default Navigation;
