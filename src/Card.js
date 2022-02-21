import React from "react";
import './Card.css'

function Card(props){
    return(
        <div className="card karta" >
  <img className="card-img-top" src={props.imgUrl}/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Play Time: {props.time}</li>
    <li className="list-group-item">Age: {props.age}</li>
    <li className="list-group-item">Player Count: {props.players}</li>
    {props.own && <li className="list-group-item ownedtag">Owned</li>}
  </ul>
  
</div>
    )
}


export default Card;

//  {props.own}