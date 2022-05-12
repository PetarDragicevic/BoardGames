import React from "react";
import "./Services.css";



function Services(props) {

  return (
    <div className="col col-sm-6">
<div className="card">
  <div className="slika">

  
  <a className="card-size" href={props.route}>
  <img src={props.img} className="card-img-top" alt="..."/>
  </a>
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
  </div>
</div>
</div>
  );
}

export default Services;


