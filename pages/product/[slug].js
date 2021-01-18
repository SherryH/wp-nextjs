import { useRouter } from "next/router";
import Image from "../../components/Image.js";
import { getProductBySlug, getAllProductsSlugs } from "../../pages/lib/api.js";

const Product = ({ result: { product } }) => {
  return (
    <div className="container flex flex-wrap justify-center p-8">
      <div className="relative h-96 min-w-28 mr-4 mb-4">
        <Image
          className="object-cover"
          src={product.image.sourceUrl}
          srcSet={product.image.srcSet}
        />
      </div>
      <div>
        <div className="text-xl text-gray-800 mb-4">{product.name}</div>
        <div
          className="text-gray-700 text-md max-w-prose"
          dangerouslySetInnerHTML={{ __html: product?.description }}
        ></div>
        <div className="text-2xl font-semibold pt-4">{product.price}</div>
      </div>
    </div>
  );
};

export default Product;

export const getStaticProps = async (context) => {
  const {
    params: { slug },
  } = context;
  const post = await getProductBySlug(slug);
  return {
    props: {
      result: post,
    },
  };
};

export async function getStaticPaths() {
  // get allPosts and get their slugs
  // build these static pages at build time
  const productSlugs = await getAllProductsSlugs();
  console.log("productSlugs", productSlugs.products.nodes);
  const slugs = productSlugs.products.nodes.map((slug) => {
    return `/product/${slug.slug}`;
  });
  return {
    paths: slugs,
    fallback: false,
  };
}
