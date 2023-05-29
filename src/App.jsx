import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Content from "./components/Content";
import Map from "./components/Map";

function App() {
  return (
    <div className="container">
      <Content />
      <Map />
    </div>
  );
}

export default App;
