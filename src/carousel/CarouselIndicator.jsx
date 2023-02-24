import React from "react";

const CarouselIndicator = ({ slides, currentIndex }) => {
  return (
    <div className="carousel-indicator">
      {slides.map((_, index) => (
        <button
          className={`carousel-indicator-item${
            currentIndex === index ? "active" : ""
          }`}
        ></button>
      ))}
    </div>
  );
};

export default CarouselIndicator;
