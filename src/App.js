import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <HomePage />
      {/* Add other components and content */}
      <Footer />
    </div>
  );
}

export default App;
