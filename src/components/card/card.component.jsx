import React from "react";
import "./card.styles.css";

export const Card =  props => (
    <div className="card-container">
    <img alt="" src={`https://robohash.org/${props.art.name}-TEXT.png`} />
      <h1 >{props.art.name}</h1>
        <span>{props.art.email}</span>
    </div>
)