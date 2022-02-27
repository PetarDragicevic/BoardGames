import React from "react";
import Services from "./Services";
import { useState } from "react";
import ServicesData from "./ServicesData";
import "./Services.css"

function ServicesCard() {
  const [data, setData] = useState(ServicesData);

  const dataArray = data.map((datas) => {
    return (
      <Services
        key={datas.id}
        img={datas.img}
        title={datas.title}
        text={datas.text}
        route={datas.routeId}
      />
    );
  });

  return (
      <div>
        <div className="container">
  <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 icons">
  {dataArray}
  </div>
  </div>
    
    </div>)
}

export default ServicesCard;


    // img1: "materijal/vosak/vosak.png",
    // img2: "materijal/vosak/vosak1.png",
    // img3: "materijal/vosak/vosak2.png",
    // img4: "materijal/vosak/vosak3.png",
    // title: "Nadogradnja Trepavia",
    // text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    // button