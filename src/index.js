import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AddNewGames from "./Pages/AddNewGames";
import Owned from "./Pages/Owned";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/AddNewGames" element={<AddNewGames />} />
      <Route path="/owned" element={<Owned />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

{
  /*  */
}
