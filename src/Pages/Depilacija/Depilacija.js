import React from "react";
import "./Depilacija.css";

function Depilacija() {
  return (
    <div>
      <img
        className="img-thumbnail img-fluid"
        src="materijal/wallpapers/depilacija-wallpaper.jpg"
      />
      <div className="conteiner">
        <h1 className="title">Depilacija</h1>
        <hr></hr>
        <p>
          Uklanjanje dlačica, odnosno depilacija, postala je obavezni deo nege.
          Ne samo da se postiže efekat nežne i glatke kože, nego se obavlja i
          neophodan piling, čime se uklanjaju mrtvi slojevi kože. Depilaciju
          radimo sa najkvalitenijim toplim I hladnim voskom.
          <br></br>
          Depilacija hladnim voskom kao I depilacija toplim voskom odvija se po
          visokim higijenskim standardima. Intimna depilacija ( brazilska
          depilacija ) je naš žaštitni žnak. Nakon upotrebe voska, sve se baca!
        </p>
      </div>
    </div>
  );
}

export default Depilacija;
