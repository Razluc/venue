import React from "react";
import Carouse from "./Carousel";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carouse />
      <div className="artist_name">
        <div className="wrapper">Rihanna</div>
      </div>
    </div>
  );
};

export default Featured;
