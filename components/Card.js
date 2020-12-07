import React from "react";
import Link from "next/link";
import styles from "./Card.module.css";
import utilStyles from "../styles/utils.module.css";

const Card = ({ post }) => {
  const formatDate = () => {
    let current_datetime = new Date();
    let formatted_date =
      current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate();
    return formatted_date;
  };

  let postDate = formatDate(post.published_at);

  return (
    <div className="card">
      <h3 className="blog-title">{post.BlogTitle}</h3>
      <span>
        // Published: {postDate}
      </span>
      <div className="blog-link">
        <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
          // Go to post
        </Link>
      </div>
    </div>
  );
};

export default Card;
