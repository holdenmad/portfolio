import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  let loadingAnimation = () => {
    gsap.to("#loadingIcon", { duration: 4, rotation: 360 });
  };

  let loadingRef = useRef(null);

  useEffect(() => {
    loadingAnimation();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.loading}>LOADING...</div>
      <div
        id="loadingIcon"
        ref={loadingRef}
        className={styles.loadingIcon}
      ></div>
    </div>
  );
};

export default LoadingScreen;
