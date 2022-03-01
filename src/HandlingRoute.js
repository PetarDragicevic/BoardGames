import React from "react";
import Home from "./Pages/Home/Home";
import Cenovnik from "./Pages/Cenovnik/Cenovnik";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nokti from "./Pages/Nokti/Nokti";
import Depilacija from "./Pages/Depilacija/Depilacija";
import Laser from "./Pages/Laser/Laser";
import Nadogradnja from "./Pages/Nadogradnja trepavica/Nadogradnja";
import Sminka from "./Pages/Sminka/Sminka";
import Tetoviranje from "./Pages/Tetoviranje obrva/Tetoviranje";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function HandlingRoute() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cenovnik" element={<Cenovnik />} />
        <Route path="/nokti" element={<Nokti />} />
        <Route path="/depilacija" element={<Depilacija />} />
        <Route path="/laser" element={<Laser />} />
        <Route path="/nadogradnja" element={<Nadogradnja />} />
        <Route path="/sminka" element={<Sminka />} />
        <Route path="/tetoviranje" element={<Tetoviranje />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default HandlingRoute;
