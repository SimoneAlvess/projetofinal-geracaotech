import { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import { GalleryContainer } from "../styles/StylesGlobal";

const Gallery = ({ className, width, height, images, showThumbs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex(Math.min(currentIndex + 1, images.length - 1));
  };

  return (
    <GalleryContainer className={className}>
      <button className="carousel-control-prev" onClick={handlePrevClick} disabled={currentIndex === 0}>
        <img src={arrowLeft} alt="Seta para a esquerda" />
      </button>
      <div className="img-container">
        <img src={images[currentIndex].src} alt="Image" style={{ width, height }} />
      </div>
      <button className="carousel-control-next" onClick={handleNextClick} disabled={currentIndex === images.length - 1}>
        <img src={arrowRight} alt="Seta para a direita" />
      </button>
    </GalleryContainer>
  );
};

export default Gallery;
