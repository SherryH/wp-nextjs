import { identifySession, setHeaderSession } from "./session";
const API_URL = "http://wccourse.local/graphql";

const fetchAPI = async (query, { variables } = {}) => {
  console.log("variables", variables);
  let headers = { "Content-Type": "application/json" };

  // attach session to header so cart number can be fetched correctly from server
  setHeaderSession(headers);

  const results = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  }).then((response) => {
    identifySession(response);
    return response.json();
  });
  console.log("results", results);
  return results.data;
};

export const fetchAllPosts = async () => {
  const query = `
  query getAllPosts {
    __typename
    posts {
      edges {
        node {
          id
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
  `;
  return fetchAPI(query);
};

export const fetchProductsAndCategories = async () => {
  const query = `
  query fetchProductsAndCategories {
    __typename
    productCategories {
     nodes {
       name
       id
       image {
         sourceUrl
         slug
         srcSet
       }
       slug
     }
   }
   products {
    nodes {
      name
      description
      averageRating
      id
      databaseId
      ... on SimpleProduct {
        id
        name
        price
        regularPrice
        slug
      }
      ... on VariableProduct {
        id
        name
        price
        regularPrice
        slug
      }
      image {
        sourceUrl
        srcSet
        id
        uri
      }
    }
  }
  }

  `;
  return fetchAPI(query);
};

export const getProductBySlug = (slug) => {
  const query = `
  query getProductBySlug($slug: ID!) {
    __typename
    product(id: $slug, idType: SLUG) {
      databaseId
      slug
      description
      galleryImages {
        nodes {
          sourceUrl(size: FANCY_LAB_BLOG)
          srcSet(size: FANCY_LAB_BLOG)
          uri
          mediaItemUrl
        }
      }
      image {
        sourceUrl
        srcSet
      }
      ... on SimpleProduct {
        id
        name
        price
        regularPrice
      }
      ... on VariableProduct {
        id
        name
        price
        regularPrice
      }
    }
  }
  `;
  return fetchAPI(query, { variables: { slug } });
};

export const getAllProductsSlugs = () => {
  const query = `query getAllProductsSlugs {
    __typename
    products(first: 200) {
      nodes {
        slug
      }
    }
  }
  `;
  return fetchAPI(query);
};

export default fetchAPI;

export const getCart = () => {
  // productCount is the number of different types of products selected
  // itemCount is the total number of items selected
  const query = `
  query getCart {
    __typename
    cart {
      contents {
        edges {
          node {
            quantity
            product {
              node {
                id
                name
                purchasable
                totalSales
                ... on SimpleProduct {
                  id
                  name
                  price(format: FORMATTED)
                }
                ... on VariableProduct {
                  id
                  name
                  price(format: FORMATTED)
                }
              }
            }
          }
        }
        productCount
        itemCount
      }
      total
      subtotal
    }
  }
  `;
  return fetchAPI(query);
};

export const addToCart = (input) => {
  // the productId is not product.id
  // productId is the product.databaseId
  // it is the numerical int id of the product
  const mutation = `
  mutation addToCartMutation($input: AddToCartInput!)  {
    __typename
    addToCart(input: $input) {
      cart {
        total
        contents {
          productCount
        }
      }
      cartItem {
        product {
          node {
            name
            id
          }
        }
        quantity
        total
        subtotal
      }
    }
  }
  `;
  return fetchAPI(mutation, { variables: input });
};
