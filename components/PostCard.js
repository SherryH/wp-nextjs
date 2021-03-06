import Image from "../components/Image";

const PostCard = ({ sourceUrl, title }) => (
  <div id="post-card" class="w-48 max-w-md min-w-28 mr-8">
    <div
      id="post-img-wrapper "
      class="bg-gray-100 h-48 w-full md:h-72 relative"
    >
      <Image class="object-cover" src={sourceUrl} />
    </div>
    <div class="pt-4 pb-16">{title}</div>
  </div>
);

export default PostCard;
