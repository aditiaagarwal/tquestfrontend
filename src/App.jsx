import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login1 from "./components/Login1";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login1 />} />
      </Routes>
    </Router>
  );
}

export default App;


