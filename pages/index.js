import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";
import Product from "../components/Product";
import { fetchProductsAndCategories } from "./lib/api";

export default function Home({ productCategories, products }) {
  console.log(productCategories, products);
  return (
    <>
      <Navigation />
      <div className={styles.main}>
        Check if style applied
        <div className={styles.title}>
          <a href="/">Hero Images Here</a>
        </div>
      </div>
      <Heading>Categories</Heading>
      <div className="container mx-8 my-4 flex flex-wrap justify-center text-white">
        {productCategories.map((category) => (
          <div
            key={category.id}
            className="flex-1 bg-blue-500 mr-4 p-2 text-center border-0 rounded"
          >
            {category.name}
          </div>
        ))}
      </div>

      <Heading>Products</Heading>
      <div className="flex flex-wrap">
        {products.map((product) => {
          console.log("productId", product.id);
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  // fetch data at build time
  // static generate pages
  const { productCategories, products } = await fetchProductsAndCategories();
  return {
    props: {
      productCategories: productCategories.nodes ? productCategories.nodes : [],
      products: products.nodes ? products.nodes : [],
    },
  };
}

function Heading({ children }) {
  return (
    <div className="container mx-8">
      <h1 className="text-3xl">{children}</h1>
    </div>
  );
}
