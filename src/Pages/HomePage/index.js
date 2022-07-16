import React from "react";
import { Iyinyang } from "../../Assets";
import { Yinyang } from "../../Component";
import Button from "../../Component/Button";
import { Footer, Headers, Left, Right } from "../../Parts";
import styles from "./homepage.module.css";

function HomePage() {
  return (
    <div>
      <div className={styles.container}>
        <Headers></Headers>
        <Right></Right>
        <Left></Left>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default HomePage;
