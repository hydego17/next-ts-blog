import { ReactElement } from "react";

import PostPreview from "../../types/PostPreview";
import ListingItem from "./ListingItem";

type Props = {
  posts: PostPreview[];
};

export default function PostListing({ posts }: Props): ReactElement {
  return (
    <article>
      {posts.map((post, index) => (
        <ListingItem key={index} {...post} />
      ))}
    </article>
  );
}
