import Link from "next/link";
import React, { ReactElement } from "react";
import PostPreview from "../../types/PostPreview";

interface Props {
  post: PostPreview;
}

export default function ListingItem({ post }: Props): ReactElement {
  return (
    <div>
      <Link href={`/blog/${post.slug}`}>
        <a>
          <h3>{post.title}</h3>
        </a>
      </Link>

      {post.excerpt && <p>{post.excerpt} </p>}
    </div>
  );
}
