import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styles from "./button.module.css";

function Button({ title, onPress }) {
  return (
    <div className={styles.wrapper} onPress={onPress}>
      <motion.div
        initial={{ opacity: 0, scale: 1.5, delay: 3 }}
        animate={{ opacity: 1, scale: 2 }}
        transition={{ scale: 3, type: "tween" }}
        whileHover={{ scale: 3 }}
        whileTap={{ scale: 2 }}
      >
        {title}
      </motion.div>
    </div>
  );
}

export default Button;
