import React from "react";
import { useState } from "react";

export default function CardItem({ title, description, imageURL }) {
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
    if (showDescription == false) {
      return <a onClick={() => setShowDescription(true)}>Read More</a>;
    } else {
      return "";
    }
  }
  return (
    <div className="col-xl-4 col-md-6 col-sm-12 mt-3">
      <div className="card">
        <img className="card-img-top" src={imageURL} />
        konstig
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <p className="card-text">{description}</p> */}
          {renderShowMore()}
          {renderDescription()}

          <button onClick={handleClick} className="btn btn-primary btn-block">
            {isLiked ? "Du har gillat" : "Gilla"}, Anatl Likes: {likes}
          </button>
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
