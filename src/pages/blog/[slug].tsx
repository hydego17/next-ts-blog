import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Layout from "../../components/Layout";

interface BlogPostProps {
  content: string;
  frontmatter: {
    title: string;
    author: string;
    date: string;
  };
}

const BlogPost: NextPage<BlogPostProps> = ({ frontmatter, content }) => {
  const { title, author, date } = frontmatter;
  return (
    <Layout pageTitle={title}>
      <div>
        <h1> {title} </h1>
        <p>
          By {author} - {date}
        </p>

        <ReactMarkdown source={content} />
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("src/_posts");
  const paths = files.map((fname) => ({
    params: {
      slug: fname.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const slug = params?.slug;
  const md = fs.readFileSync(path.join("src/_posts", `${slug}.md`)).toString();
  const { data, content } = matter(md);
  const date = data.date.toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return {
    props: {
      frontmatter: {
        title: data.title,
        author: data.author,
        date,
      },
      content,
    },
  };
};

export default BlogPost;
