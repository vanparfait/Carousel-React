import React from "react";

const CarouseItem = ({ slide }) => {
  return (
    <div className="carousel-item">
      <img src={slide} alt="personne" />
    </div>
  );
};

export default CarouseItem;
