import Link from "next/link";
import Image from "../components/Image";

const Product = ({ product }) => {
  return (
    <div className="flex-1 min-w-28 m-8">
      <Link href={`/product/${product.slug}`}>
        <div className="relative bg-gray-100 h-48 w-auto md:h-72 cursor-pointer">
          <Image
            className="object-cover"
            src={product.image.sourceUrl}
            srcSet={product.image.srcSet}
          />
        </div>
      </Link>
      <h3 className="text-xl text-gray-800 pt-4">{product.name}</h3>
      <div
        className="text-gray-700 text-md truncate "
        dangerouslySetInnerHTML={{ __html: product?.description }}
      ></div>
      <div className="text-2xl font-semibold pt-2">{product.price}</div>
    </div>
  );
};

export default Product;
