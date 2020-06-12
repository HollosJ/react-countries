import React from "react";

import "./App.css";
import "./components/Fa";

import Countries from "./components/Countries";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <a name="top"></a>
      <Countries />
      <Footer />
    </div>
  );
}

export default App;
