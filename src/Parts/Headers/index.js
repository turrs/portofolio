import React from "react";
import { Button, Uciha } from "../../Component";
import styles from "./headers.module.css";
import { Iuciha, Iyinyang } from "../../Assets";
function Headers() {
  return (
    <div className={styles.container}>
      <div className={styles.headers}>
        <div className={styles.wrapperButton}>
          <Button title="test"></Button>
        </div>
        <div className={styles.wrapperButton}></div>
        <div className={styles.wrapperButton}>
          <Button title="test"></Button>
        </div>
      </div>
    </div>
  );
}

export default Headers;
