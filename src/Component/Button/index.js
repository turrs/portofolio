import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styles from "./button.module.css";
function Button() {
  return (
    <div className={styles.wrapper}>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        Button
      </motion.div>
    </div>
  );
}

export default Button;
