const API_URL = "http://wccourse.local/graphql";

const fetchAPI = async (query) => {
  const headers = { "Content-Type": "application/json" };
  const results = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query }),
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

export default fetchAPI;
