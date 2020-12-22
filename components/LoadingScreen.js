import React from "react";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loading}>LOADING...</div>
    </div>
  );
};

export default LoadingScreen;
