import React from "react";
import Carouse from "./Carousel";
import TimeUntil from "./TimeUntil";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carouse />
      <div className="artist_name">
        <div className="wrapper">Rihanna</div>
      </div>
      <TimeUntil />
    </div>
  );
};

export default Featured;
