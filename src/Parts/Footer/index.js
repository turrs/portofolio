import React from "react";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import styles from "./footer.module.css";
import { Button } from "../../Component";

import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperButton}>
        <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
          <Button title="About"></Button>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
