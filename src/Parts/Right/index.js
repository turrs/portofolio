import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styles from "./right.module.css";
import { Button } from "../../Component";
function Right() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Button title="Work"></Button>
      </div>
    </div>
  );
}

export default Right;
