import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styles from "./uciha.module.css";
import { Iuciha } from "../../Assets";
import { ReactSVG } from "react-svg";
function Uciha() {
  return (
    <div className={styles.wrapperImage}>
      <motion.div
        animate={{
          rotate: 360,
          repeat: Infinity,
          x: 0,
          z: 1,
          y: 0,
          scale: 20,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <img src={Iuciha} className={styles.image}></img>
      </motion.div>
    </div>
  );
}

export default Uciha;
