import { useState } from "react";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import { GalleryContainer } from "../styles/StylesGlobal";

const Gallery = ({ className, width, height, images, showThumbs, radius }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex(Math.min(currentIndex + 1, images.length - 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <GalleryContainer className={className}>
      <div className="gallery-slide">
        <button className="carousel-control-prev" onClick={handlePrevClick} disabled={currentIndex === 0}>
          <img src={arrowLeft} alt="Seta para a esquerda" />
        </button>
        <div className="img-container">
          <img src={images[currentIndex].src} alt="Imagem" style={{ width, height }} />
        </div>
        <button className="carousel-control-next" onClick={handleNextClick} disabled={currentIndex === images.length - 1}>
          <img src={arrowRight} alt="Seta para a direita" />
        </button>
      </div>
      <div className="thumbnails">{showThumbs && images.map((image, index) => <img key={index} src={image.src} alt={`Thumbnail ${index + 1}`} className={`thumbnail ${currentIndex === index ? "active" : ""}`} onClick={() => handleThumbnailClick(index)} style={{ borderRadius: radius }} />)}</div>
    </GalleryContainer>
  );
};

export default Gallery;
