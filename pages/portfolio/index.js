import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import portfolioStyles from '../../styles/portfolio.module.css';

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <h1 className={portfolioStyles.pageHeading}>Portfolio</h1>
      <div className={portfolioStyles.projectBlock}>
        <h2 className={portfolioStyles.projectHeading}>
          Lola
        </h2>
        {/* <div className={portfolioStyles.projectSubHeading}><i>a tandem app</i></div> */}
        <p>
          Lola is a language tandem finder that brings people together to learn
          languages.
        </p>
        <div className={portfolioStyles.center}>
        <a className={utilStyles.imgLink} href='https://github.com/holdenmad/Lola-Tandem'>
          <img
            src='lola_screenshot.png'
            alt='Screenshot of Lola tandem app'
            className={portfolioStyles.image}
          />
        </a>
        </div>
      </div>
      <div className={portfolioStyles.projectBlock}>
        <h2 className={portfolioStyles.projectHeading}>Gender Explorer</h2>
        <p>
          This app is an educational tool to encourage you to explorer your own
          gender and sexuality, and spark your curiosity.
        </p>
        <div className={portfolioStyles.center}>
        <a className={utilStyles.imgLink} href='https://github.com/holdenmad/gender-explorer'>
          <img
            src='gender_screenshot.png'
            alt='Screenshot of Gender Explorer app'
            className={portfolioStyles.image}
          />
        </a>
        </div>
      </div>
      <div className={portfolioStyles.projectBlock}>
        <h2 className={portfolioStyles.projectHeading}>
          Colorful
        </h2>
        {/* <div className={portfolioStyles.projectSubHeading}><i>a color education app</i></div> */}
        <p>
          A simple app to learn more about different colors! Click on any color
          on the front page to read about the history, see pictures, and read
          quotes with the color.
        </p>
        <div className={portfolioStyles.center}>
        <a className={utilStyles.imgLink} href='https://github.com/holdenmad/colorful'>
          <img
            src='colorful_screenshot.png'
            alt='Screenshot of Colorful app'
            className={portfolioStyles.image}
          />
        </a>
        </div>
      </div>
      <div className={portfolioStyles.projectBlock}>
        <h2 className={portfolioStyles.projectHeading}>Recipes Blog</h2>
        <p>A simple recipes blog using Contentful and Bootstrap.</p>
        <div className={portfolioStyles.center}>
        <a className={utilStyles.imgLink} href=''>
          <img
            src='recipes_screenshot.png'
            alt='Screenshot of Recipes blog'
            className={portfolioStyles.image}
          />
        </a>
        </div>
      </div>
    </Layout>
  );
}
