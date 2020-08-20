import React from "react";
import { useEffect, useState } from "react";
import CardItemDetail from "../components/CardItemDetail";

export default function ImageDetailPage(props) {
  let [imageData, setImageData] = useState({});

  function fetchImage() {
    const imageId = props.match.params.id;
    fetch(`https://image-mock-data.firebaseio.com/images/${imageId}.json`)
      .then((res) => res.json())
      .then((result) => {
        setImageData(result);
      });
  }

  useEffect(() => {
    fetchImage();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>Image Detail Page</h1>
      <CardItemDetail
        title={imageData.title}
        description={imageData.description}
        imageURL={imageData.imageURL}
      />
    </div>
  );
}
