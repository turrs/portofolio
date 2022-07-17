import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { About, Blog } from "../../Pages";
import { Iuciha, Iyinyang } from "../../Assets";
import { Uciha, Yinyang } from "../../Component";
import Button from "../../Component/Button";
import { Footer, Headers, Left, Loading, Right } from "../../Parts";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styles from "./template.module.css";
import { ReactSVG } from "react-svg";

function Template({ navigation }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  const [showContent, setShowContent] = useState(false);
  const imageClick = () => {
    setShowContent(true);
  };
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
          animate={{ scale: 1, duration: 2 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={styles.content}
        >
          {!showContent && (
            <motion.div
              whileHover={{ scale: 0.5 }}
              whileTap={{ scale: 0.3 }}
              clasName={styles.wrapperUciha}
              animate={{
                rotate: 360,
                repeat: Infinity,
                x: 0,
                z: 0,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <img src={Iuciha} onClick={() => imageClick()} />
            </motion.div>
          )}
          {!showContent && (
            <div clasName={styles.click}>
              <p>Click me</p>
            </div>
          )}
        </motion.div>

        <Right></Right>
        <Left></Left>

        <Footer></Footer>
      </div>
    </motion.div>
  );
}

export default Template;
