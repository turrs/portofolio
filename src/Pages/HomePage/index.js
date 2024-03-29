import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "../../Pages";
import { Iuciha, Iyinyang } from "../../Assets";
import { Uciha, Yinyang } from "../../Component";
import Button from "../../Component/Button";
import { Footer, Headers, Left, Loading, Right } from "../../Parts";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styles from "./homepage.module.css";
import { ReactSVG } from "react-svg";
function HomePage({ navigation }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });
  return (
    <motion.div>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1, duration: 1 }}
          exit={{ opacity: 0.5 }}
        >
          <Loading></Loading>
        </motion.div>
      )}
      <Headers></Headers>
      <div className={styles.container}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, duration: 5 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={styles.content}
        >
          <div></div>
        </motion.div>

        <Right></Right>
        <Left></Left>
        <Footer></Footer>
      </div>
    </motion.div>
  );
}

export default HomePage;
