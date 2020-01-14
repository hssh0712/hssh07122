import React from "react"

function Card(props) {
  return (
    <div className="card col-lg-4 col-md-4 col-sm-6">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <hr />
      <h4>{props.gender}</h4>
      <hr />
      <h4 className="card_info">Characteristics: {props.characteristic}</h4>
      <hr />
      <h4 className="card_info">Personality: {props.personality}</h4>
    </div>
  );
}

export default Card;