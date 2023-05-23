import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card1 from "./components/Card1";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card1 /> 
      <HomePage />
      <Footer />
    </div>
  );
}


export default App;
