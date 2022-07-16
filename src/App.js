import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import React from "react";
import { HomePage } from "./Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
