import React from "react";

import { useState, useEffect } from "react";
import CardItem from "./CardItem";

export default function CardList() {
  let [imageList, setImageList] = useState([]);

  function fetchImageList() {
    fetch("https://image-mock-data.firebaseio.com/images.json")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setImageList(result);
      });
  }

  useEffect(() => {
    fetchImageList();
  }, []);

  return (
    <div>
      <h2>Card list</h2>
      <button onClick={fetchImageList}>Images</button>
      <div className="row">
        {imageList.map((item, index) => {
          return (
            <CardItem
              key={index}
              id={index}
              title={item.title}
              description={item.description}
              imageURL={item.imageURL}
            />
          );
        })}
      </div>
    </div>
  );
}
