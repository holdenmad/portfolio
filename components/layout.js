import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Contact from "./Contact";
import Footer from "./Footer";
import Navigation from "./Navigation";

const name = "Holden Madagame";
export const siteTitle = "Junior Developer";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <>
          {home ? (
            <>
              <img
                src="/holden_x.jpg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>

              {/* Contact and Social Media */}
              <Contact home={home} />

              {/* Navigation */}
              <Navigation home={home} />
            </>
          ) : (
            <>
              <Link href="/">
                {/* <a> */}
                  <img
                    src="/holden_x.jpg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle} ${utilStyles.imgLink} `}
                    alt={name}
                  />
                {/* </a> */}
              </Link>
              {/* 
              //Save this for later
              <h2 className={utilStyles.headingLg}>
                <Link href='/'>
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2> */}
              {/* <Contact home={home}/> */}
            </>
          )}
        </>
      </header>
      <main>{children}</main>
      {/* <Footer/> */}
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a className={utilStyles.link}>← Back to home</a>
          </Link>
        </div>
      )} */}
    </div>
  );
}
