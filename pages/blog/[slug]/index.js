import React from "react";
import Layout from "../../../components/layout";
import Head from "next/head";
import Link from "next/link";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import utilStyles from "../../../styles/utils.module.css";
import blogStyles from "../../../styles/blog.module.css";

const { publicRuntimeConfig } = getConfig();
const { API_URL } = process.env;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${API_URL}/blog-posts`);
  const posts = await res.json();
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => `/blog/${post.slug}`);
  console.log(paths);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // const { slug } = context.query;
  const res = await fetch(
    `${publicRuntimeConfig.API_URL}/blog-posts?slug=${params.slug}`
  );
  const data = await res.json();
  return {
    props: {
      post: data[0],
    },
  };
}

// export async function getStaticProps({params}) {
//   const res = await fetch(`${API_URL}/blog-posts/${params.slug}`);
//   const data = await res.json();
//   return {
//     props: {
//       blog_posts: data,
//     },
//   };
// }

const Posts = ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>{post.BlogTitle}</title>
      </Head>
      <div className={blogStyles.postBody}>
        <h1 className={blogStyles.blogTitle}>{post.BlogTitle}</h1>
        <img
          alt={post.BlogCover.alternativeText}
          src={post.BlogCover.url}
          className={blogStyles.blogCover}
        />
        <p className={blogStyles.blogText}>{post.BlogText}</p>
      </div>

      <div className={blogStyles.backToBlog}>
        <Link href="/blog">
          <a className={utilStyles.link}>← Back to blog</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Posts;
