import { useEffect, useState } from "react";
import "../styles/globals.css";
import Router from "next/router";
import LoadingScreen from "../components/LoadingScreen.js";
import App, { Container } from "next/app";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState({ loading: false });
  Router.onRouteChangeStart = (url) => {
    // Some page has started loading
    console.log(state.loading);
    setState({ loading: true }); // set state to pass to loader prop
  };

  Router.onRouteChangeComplete = (url) => {
    // Some page has finished loading
    console.log(state.loading);
    setState({ loading: false }); // set state to pass to loader prop
  };

  Router.onRouteChangeError = (err, url) => {
    // an error occurred.
    // some error logic
  };

  if (state.loading === true) {
    return <LoadingScreen />;
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;
