import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styles from "./socialmedia.module.css";
import { Button } from "../../Component";
import { Ifacebook, Igithub, Iinstagram, Ilinkedin } from "../../Assets";
function SocialMedia() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.8 }}
        className={styles.wrapper}
      >
        <img src={Igithub} className={styles.img}></img>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.8 }}
        className={styles.wrapper}
      >
        <img src={Iinstagram} className={styles.img}></img>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.8 }}
        className={styles.wrapper}
      >
        <img src={Ifacebook} className={styles.img}></img>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 3.5 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.8 }}
        className={styles.wrapper}
      >
        <img src={Ilinkedin} className={styles.img}></img>
      </motion.div>
    </div>
  );
}

export default SocialMedia;
