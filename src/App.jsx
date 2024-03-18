import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login1 from "./components/Login1";
import Homepage from "./components/Homepage";
import Labreport  from "./components/Labreport";
import Smartinterpretation from "./components/Smartinterpretation";
import BarCharts from "./components/visualization";
import Profile from "./components/Profile";
import Pdf from "./components/Pdf";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/labreport" element={<Labreport/>} />
        <Route path="/smartinterpretation" element={<Smartinterpretation/>} />
        <Route path="/barcharts" element={<BarCharts/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/pdf" element={<Pdf/>} />
      </Routes>
    </Router>
  );
}

export default App;


