import React from "react";
import img from "../../Assets/conf.png";
import "../../Style/Card.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div>
      <button className="text-start card card-dash card-out-dash card-out">
        <img src={img}></img>
        <div className="p-3">
          <h6>Virtual sourcing recruiting sources recruiters</h6>
          <p>Mar 25, 6:30pm</p>
        </div>
      </button>
    </div>
    // <div className="card-out">
    //   <div className="card-img-div">
    //     <img class="card-img-top" src={props.Image} alt="Card image cap" />
    //   </div>
    //   <div class="card-body text-start">
    //     <h5 class="card-title">{props.Name}</h5>
    //     <p class="card-text">
    //       {props.Date}, {props.Start}
    //     </p>
    //   </div>
  );
}
