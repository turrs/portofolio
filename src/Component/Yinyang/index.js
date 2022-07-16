import React from "react";
import { Iuciha, Iyinyang } from "../../Assets";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styles from "./yinyang.module.css";
function Yinyang() {
  return (
    <div className={styles.wrapperImage}>
      <motion.div
        animate={{
          rotate: 360,
          repeat: Infinity,
          x: 0,
          z: 0,
          y: 0,
          scale: [1, 2, 2, 2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <img src={Iuciha} className={styles.imageYin}></img>
      </motion.div>
    </div>
  );
}

export default Yinyang;
