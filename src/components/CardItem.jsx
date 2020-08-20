import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CardItem({ id, title, description, imageURL }) {
  let [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(100);
  let [showDescription, setShowDescription] = useState(false);

  function handleClick() {
    setIsLiked(true);
    setLikes(likes + 1);
  }

  function renderDescription() {
    if (showDescription) {
      return <p className="card-text">{description}</p>;
    } else {
      return "";
    }
  }

  function renderShowMore() {
    if (showDescription === false) {
      return <span onClick={() => setShowDescription(true)}>Read More</span>;
    } else {
      return "";
    }
  }
  return (
    <div className="col-xl-4 col-md-6 col-sm-12 mt-3">
      <div className="card">
        <img className="card-img-top" src={imageURL} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <p className="card-text">{description}</p> */}
          {renderShowMore()}
          {renderDescription()}

          <button onClick={handleClick} className="btn btn-primary btn-block">
            {isLiked ? "Du har gillat" : "Gilla"}, Antal Likes: {likes}
          </button>
          <Link to={`/image/${id}`}>Go to image detail</Link>
        </div>
      </div>
    </div>
  );
}

// let randomLikeValue = Math.floor(Math.random() * 1500);
//

// function handleClick() {
//
// }
