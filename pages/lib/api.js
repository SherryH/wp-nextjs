const API_URL = 'http://wccourse.local/graphql'

const fetchAPI = async (query) => {
  const headers = { 'Content-Type': 'application/json' }
  const results = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query })
  }).then((response) => response.json())
  return results.data
}

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
  `
  return fetchAPI(query)
}

export default fetchAPI
