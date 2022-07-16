import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styles from "./left.module.css";
import { Button } from "../../Component";
function Left() {
  return (
    <div className={styles.container}>
      <Button>wui</Button>
    </div>
  );
}

export default Left;
