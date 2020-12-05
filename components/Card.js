import React from "react";
import Link from "next/link";

const Card = ({ post }) => {
  const { API_URL } = process.env;

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
    <Link href="postId">
      <div className="">
        <h3>{post.BlogTitle}</h3>
        <span>
          <i>Published: {postDate}</i>
        </span>
      </div>
    </Link>
  );
};

export default Card;
