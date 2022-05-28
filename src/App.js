import React from "react";
import Awards from "./components/Awards";
import "./App.css";
import { Navabar } from "./components/Navbar";
import Home from "./components/Home";
const App = () => {
  return (
    <div>
      <Navabar />
      <Home />
      <Awards />
    </div>
  );
};

export default App;
