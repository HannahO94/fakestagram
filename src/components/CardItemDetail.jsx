import React from "react";

export default function CardItemDetail({ title, description, imageURL }) {
  return (
    <div className="m-3">
      <div className="card">
        <img className="card-img-top" src={imageURL} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
