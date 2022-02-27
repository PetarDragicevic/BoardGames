import React from "react";
import Home from "./Pages/Home/Home";
import Cenovnik from "./Pages/Cenovnik/Cenovnik";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nokti from "./Pages/Nokti/Nokti";


function HandlingRoute(){
    return (
        <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cenovnik" element={<Cenovnik/>} />
      <Route path="/nokti" element={<Nokti/>} />
      {/* <Route path="/owned" element={<Owned />} /> */}
    </Routes>
  </Router>
    )
}

export default HandlingRoute;
