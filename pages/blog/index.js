import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import fetch from "isomorphic-unfetch";

export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/blog-posts`);
  const data = await res.json();

  return {
    props: {
      blog_posts: data,
    },
  };
}

export default function Blog({ blog_posts }) {
  console.log(blog_posts);
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Blog</h1>
      <div>Where blog posts go</div>
      <Link href="">This goes to a blog post</Link>
    </Layout>
  );
}
