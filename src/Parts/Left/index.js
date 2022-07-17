import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styles from "./left.module.css";
import { Button } from "../../Component";
import SocialMedia from "../SocialMedia";
function Left() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperButton}>
        <Button title="Skill"></Button>
      </div>
      <div className={styles.wrapper}>
        <SocialMedia></SocialMedia>
      </div>
    </div>
  );
}

export default Left;
