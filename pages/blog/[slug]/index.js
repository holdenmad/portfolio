import React from "react";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import utilStyles from "../../styles/utils.module.css";
import blogStyles from "../../styles/blog.module.css";

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
  console.log("Post content" + post.slug);
  return (
    <>
      <h1>{post.BlogTitle}</h1>
      <img src={API_URL + post.BlogCover.url} className={}></img>
      <div></div>
      <p>{post.BlogText}</p>
    </>
  );
};

export default Posts;
