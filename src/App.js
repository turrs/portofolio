import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import React from "react";
import { About, HomePage, NotFound, Template } from "./Pages";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Template />}></Route>
        <Route exact path="/homepage" element={<HomePage></HomePage>}></Route>
        <Route exact path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </Router>
  );
}

export default App;
