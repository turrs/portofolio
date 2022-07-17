import React from "react";
import styles from "./about.module.css";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
function About() {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      About
    </motion.div>
  );
}

export default About;
