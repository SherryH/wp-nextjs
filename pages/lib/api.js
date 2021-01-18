const API_URL = "http://wccourse.local/graphql";

const fetchAPI = async (query, { variables } = {}) => {
  const headers = { "Content-Type": "application/json" };
  const results = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  }).then((response) => response.json());
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
