import React from "react";
import Navigation from "../components/Navigation";
import PostCard from "../components/PostCard";
import { fetchAllPosts } from "../pages/lib/api.js";

const Posts = ({ posts }) => {
  return (
    <div class="px-8 container mx-auto">
      <Navigation />
      <h1>This is a posts page</h1>
      <div
        id="post-cards-container"
        class="flex flex-wrap py-16 justify-center"
      >
        {posts.posts.edges.map((edge) => (
          <PostCard
            sourceUrl={edge.node.featuredImage?.node.sourceUrl}
            title={edge.node.title}
          />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // fetch data at build time
  // static generate pages
  const posts = await fetchAllPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Posts;
