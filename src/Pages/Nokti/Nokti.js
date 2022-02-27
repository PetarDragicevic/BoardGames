import React from "react";
import Header from "../../Components/Header/Header";
import "./Nokti.css";
import Footer from "../../Components/Footer/Footer";

function Nokti() {
  return (
    <div>
      <Header />
      <img
        className="img-thumbnail img-fluid wallpaper"
        src="materijal/Nokti/nokti-wallpaper.jpg"
      />
      <Footer/>
    </div>
  );
}

export default Nokti;
