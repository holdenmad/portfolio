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
    <div>
      <Link key={post.id} href="/blog/[slug]" as={`/blog/${post.slug}`}>
        <div className={styles.card}>
          <h2 className={(utilStyles.link, styles.blogTitle)}>
            {post.BlogTitle}
          </h2>
          <span className={styles.date}>Published: {postDate}</span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
