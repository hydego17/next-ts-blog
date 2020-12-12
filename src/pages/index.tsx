import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, NextPage } from "next";

import PostPreview from "../types/PostPreview";
import Layout from "../components/Layout";
import { PageHeader } from "../components/Atom/PageHeader";
import PostListing from "../components/Posts/PostListing";

interface BlogProps {
  posts: PostPreview[];
}

const Home: NextPage<BlogProps> = ({ posts }) => {
  return (
    <Layout pageTitle="Home">
      <PageHeader>
        <h1>Hello</h1>
        <p>This is a Next.js starter blog with Typescript</p>
      </PageHeader>

      <section>
        <h2>Blog</h2>

        <PostListing posts={posts} />
      </section>
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

    return {
      title: data.title,
      slug: fname.replace(".md", ""),
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
