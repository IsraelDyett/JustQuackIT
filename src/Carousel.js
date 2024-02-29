import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images, interval = 3000 }) => {
  const [startIndex, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const visibleImages = images.slice(startIndex, startIndex + 3);

  const moveToPrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 3
    );
  };

  const moveToNext = () => {
    setIndex((prevIndex) =>
      prevIndex + 3 >= images.length ? 0 : prevIndex + 3
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {visibleImages.map((image, i) => (
          <img key={i} src={image} alt="" className="carousel-image" />
        ))}
      </div>
      <div className="carousel-buttons">
        <button onClick={moveToPrevious}>&lt;</button>
        <button onClick={moveToNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;