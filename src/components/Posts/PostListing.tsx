import { ReactElement } from "react";

import PostPreview from "../../types/PostPreview";
import ListingItem from "./ListingItem";

interface Props {
  posts: PostPreview[];
}

export default function PostListing({ posts }: Props): ReactElement {
  return (
    <div>
      {posts.map((post, index) => (
        <ListingItem key={index} post={post} />
      ))}
    </div>
  );
}
