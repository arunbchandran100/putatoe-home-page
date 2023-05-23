import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Sbc from "./components/Sbc";
import Psp from "./components/Psp";
import Apsp from "./components/Apsp";
import Swp from "./components/Swp";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Card1 /> 
      <Card2 /> 
      <Sbc/>
      <Psp/>
      <Apsp/>
      <Swp/>
      <Footer />
    </div>
  );
}


export default App;
