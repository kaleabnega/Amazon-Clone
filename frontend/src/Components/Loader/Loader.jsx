import React from "react";
import { FadeLoader } from "react-spinners";
import styles from "./css/loader.module.css";

function Loader() {
  return (
    <div className={styles.fade_loader_container}>
      <FadeLoader />
    </div>
  );
}

export default Loader;
