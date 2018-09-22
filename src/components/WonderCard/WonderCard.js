import React from "react";
import "./WonderCard.css";

const WonderCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default WonderCard;
