import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import portfolioStyles from "../../styles/portfolio.module.css";
import homeStyles from "../../styles/Home.module.css";
import blogStyles from "../../styles/blog.module.css";

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <h1 className={portfolioStyles.pageHeading}>Portfolio</h1>

      <hr className={homeStyles.homeHr} />

      <div className={portfolioStyles.projectBlock}>
        <h2 className={portfolioStyles.projectHeading}>Lola</h2>
        <p>
          Lola is a language tandem finder that brings people together to learn
          languages.
        </p>
        <div className={portfolioStyles.center}>
          <a
            className={utilStyles.imgLink}
            href="https://lola-tandem.netlify.app/"
          >
            <img
              src="lola_screenshot.png"
              alt="Screenshot of Lola tandem app"
              className={portfolioStyles.image}
            />
          </a>
        </div>
      </div>

      <hr className={homeStyles.homeHr} />

      <div className={portfolioStyles.projectBlock}>
        <h2 className={portfolioStyles.projectHeading}>Gender Explorer</h2>
        <p>
          This app is an educational tool to encourage you to explorer your own
          gender and sexuality, and spark your curiosity.
        </p>
        <div className={portfolioStyles.center}>
          <a
            className={utilStyles.imgLink}
            href="https://gender-explorer.netlify.app/"
          >
            <img
              src="gender_screenshot.png"
              alt="Screenshot of Gender Explorer app"
              className={portfolioStyles.image}
            />
          </a>
        </div>
      </div>

      <hr className={homeStyles.homeHr} />

      <div className={portfolioStyles.projectBlock}>
        <h2 className={portfolioStyles.projectHeading}>Colorful</h2>
        <p>
          A simple app to learn more about different colors! Click on any color
          on the front page to read about the history, see pictures, and read
          quotes with the color.
        </p>
        <div className={portfolioStyles.center}>
          <a
            className={utilStyles.imgLink}
            href="https://colorful-app.netlify.app/"
          >
            <img
              src="colorful_screen.png"
              alt="Screenshot of Colorful app"
              className={portfolioStyles.image}
            />
          </a>
        </div>
      </div>

      <hr className={homeStyles.homeHr} />

      <div className={portfolioStyles.projectBlock}>
        <h2 className={portfolioStyles.projectHeading}>Recipes Blog</h2>
        <p>A simple recipes blog using Contentful and Bootstrap.</p>
        <div className={portfolioStyles.center}>
          <a
            className={utilStyles.imgLink}
            href="https://hownottocook-group4.netlify.app/"
          >
            <img
              src="recipes_screenshot1.png"
              alt="Screenshot of Recipes blog"
              className={portfolioStyles.image}
            />
          </a>
        </div>
      </div>
      <div className={blogStyles.backToBlog}>
        <Link href="/">
          <a className={utilStyles.link}>← Back to home</a>
        </Link>
      </div>
    </Layout>
  );
}
