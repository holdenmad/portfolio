import React from "react";
import Layout from "../../../components/layout";
import Head from "next/head";
import Link from "next/link";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import utilStyles from "../../../styles/utils.module.css";
import blogStyles from "../../../styles/blog.module.css";

const { publicRuntimeConfig } = getConfig();
const { API_URL } = process.env;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(
    `${publicRuntimeConfig.API_URL}/blog-posts?slug=${slug}`
  );
  const data = await res.json();
  return {
    props: {
      post: data[0],
    },
  };
}

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
          src={API_URL + post.BlogCover.url}
          className={blogStyles.blogCover}
        />
        <div></div>
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
