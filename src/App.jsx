import React from "react";
import "./App.css";
import Testimonial from "./components/Testimonial";
import Topbox from "./components/TopBox";
import Link from "./components/Link";
import Serviceinfo from "./components/Serviceinfo";
import Ourservices from "./components/Ourservices";
import TwoBoxes from "./components/TwoBoxes";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Link/>
      <Topbox />
      <Serviceinfo/>
      <Ourservices/>
      <TwoBoxes/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default App;
