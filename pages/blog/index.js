import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import blogStyles from "../../styles/blog.module.css";
import Card from "../../components/Card";
import fetch from "isomorphic-unfetch";

const { API_URL } = process.env;

//Use this to make sure dynamic routes are generated statically

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/blog-posts`);
  const data = await res.json();
  return {
    props: {
      blog_posts: data,
    },
  };
}

export default function Blog({ blog_posts }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <h1 className={blogStyles.pageHeading}>Blog</h1>
      {blog_posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}

      <div className={blogStyles.backToBlog}>
        <Link href="/">
          <a className={utilStyles.link}>← Back to home</a>
        </Link>
      </div>
    </Layout>
  );
}
