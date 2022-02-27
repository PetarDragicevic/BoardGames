import React from "react";
import "./Services.css";



function Services(props) {

  return (
    <div className="col col-sm-6">
<div className="card">
  <a href={props.route}>
  <img src={props.img} className="card-img-top" alt="..."/>
  </a>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>




    // <div className="services" style={stile}>
    //   <div className="services-text">
    //     <ul className="list-group left-list">
    //       <li className="list-group-item" style={stile}>
    //         <h1>{props.title}</h1>
    //       </li>
    //       <li className="list-group-item" style={stile}>
    //         <p>{props.text}</p>
    //       </li>
    //       <li className="list-group-item" style={stile}>
    //         <Button className="btn btn-primary">View More</Button>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="img-fluid img-container">
    //     <div id="cover">
    //       <img
    //         className="img-thumbnail services-img"
    //         src={props.img1}
    //       />
    //       <img
    //         className="img-thumbnail services-img"
    //         src={props.img2}
    //       />
    //       <img
    //         className="img-thumbnail services-img"
    //         src={props.img3}
    //       />
    //       <img
    //         className="img-thumbnail services-img"
    //         src={props.img4}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Services;


