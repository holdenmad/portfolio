import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import utilStyles from "../styles/utils.module.css";

const Navigation = () => {
  return (
    <div className={styles.socialmedia}>
      <div className={utilStyles.navLink}>
        <Link href="/portfolio">Portfolio</Link>
      </div>
      {/* <div className={utilStyles.navLink}>
        <Link href="/blog">Blog</Link>
      </div> */}
    </div>
  );
};

export default Navigation;
