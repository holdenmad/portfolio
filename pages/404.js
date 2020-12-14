// 404.js
import Link from "next/link";
import blogStyles from "../styles/blog.module.css";
import utilStyles from "../styles/utils.module.css";
import homeStyles from "../styles/Home.module.css";

export default function FourOhFour() {
  return (
    <div className={homeStyles.fourohfourBG}>
      <h1 className={homeStyles.fourohfour}>404</h1>
      <h2>Page Not Found</h2>
      <div className={blogStyles.backToBlog}>
        <Link href="/">
          <a className={utilStyles.link}>← Back to home</a>
        </Link>
      </div>
    </div>
  );
}
