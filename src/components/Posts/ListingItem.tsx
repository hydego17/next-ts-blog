import styled from "@emotion/styled";
import Link from "next/link";
import React, { ReactElement } from "react";
import PostPreview from "../../types/PostPreview";

type Props = PostPreview;

export default function ListingItem({
  title,
  slug,
  date,
  excerpt,
}: Props): ReactElement {
  return (
    <>
      <BlogList>
        <Link href={`/blog/${slug}`}>
          <a>
            <h3>{title}</h3>
          </a>
        </Link>
        <p className="_bloglist-date"> {date} </p>

        {excerpt && <p className="_bloglist-excerpt">{excerpt} </p>}
      </BlogList>
    </>
  );
}

const BlogList = styled("section")`
  border-bottom: 1px solid #ededed;
  padding: 1.5rem 0;

  h3 {
    padding: 0.5rem 0;
  }

  ._bloglist-date {
    font-size: 0.9rem;
  }

  ._bloglist-excerpt {
    margin-top: 1.2rem;
  }
`;
