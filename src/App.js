import React from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
// import Footer from "./components/header_footer/Footer";

function App() {
  return (
    <div
      className="App"
      style={{ height: "1500px", backgroundColor: "purple" }}
    >
      <Header />
      <Featured />
    </div>
  );
}

export default App;
