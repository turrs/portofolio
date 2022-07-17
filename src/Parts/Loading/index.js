import React from "react";
import { Uciha } from "../../Component";
import styles from "./loading.module.css";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
function Loading() {
  return (
    <div className={styles.container}>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 500 }}
          exit={{ opacity: 0, scale: 500 }}
        />
        <Uciha />
      </div>
    </div>
  );
}

export default Loading;
