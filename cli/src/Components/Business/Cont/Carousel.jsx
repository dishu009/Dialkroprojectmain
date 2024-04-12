import React, { useState } from 'react';
import './Carousel.css';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-7 transform -translate-y-1/2 bg-red-700 text-white px-4 py-2 rounded-l"
        onClick={prevImage}
      >
        <FaArrowAltCircleLeft className='text-white'/>
      </button>
      <button
        className="absolute top-1/2 right-7 transform -translate-y-1/2 bg-red-700 text-white px-4 py-2 rounded-r"
        onClick={nextImage}
      >
        <FaArrowAltCircleRight className='text-white'/>
      </button>
      <img
        className="block mx-auto  widthset"
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
    </div>
  );
};

export default Carousel;
