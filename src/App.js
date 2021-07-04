import React from "react";
import "./App.css";
import Shrink from "./components/Shrink";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Shrink />
      </div>
    </Router>
  );
}

export default App;
