import React from "react";

const CarouseItem = ({ slide, stopSlide, startSlide }) => {
  return (
    <div
      className="carousel-item"
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
    >
      <img src={slide} alt="personne" />
    </div>
  );
};

export default CarouseItem;
