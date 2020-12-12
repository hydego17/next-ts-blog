import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";

import PostPreview from "../types/PostPreview";
import Layout from "../components/Layout";
import { PageHeader } from "../components/Atom/PageHeader";
import PostListing from "../components/Posts/PostListing";
import Wrapper from "../styles/wrapper";

type BlogProps = {
  posts: PostPreview[];
};

const Home: NextPage<BlogProps> = ({ posts }) => {
  return (
    <Layout pageTitle="Home">
      <PageHeader>
        <h1>Hello</h1>
        <p>This is a Next.js starter blog with Typescript</p>
      </PageHeader>

      <Wrapper>
        <h2>Blog</h2>

        <PostListing posts={posts} />
      </Wrapper>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const files = fs.readdirSync("src/_posts");
  const posts = files.map((fname) => {
    const md = fs.readFileSync(`src/_posts/${fname}`, "utf-8");

    const { data, excerpt } = matter(md, {
      excerpt_separator: "\r\n\r\n",
    });

    const date = data.date.toLocaleDateString("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return {
      title: data.title,
      slug: fname.replace(".md", ""),
      date,
      excerpt,
    };
  });
  return {
    props: {
      posts,
    },
  };
};

export default Home;
