import React, { useState, useEffect, useRef } from "react";
import navButton from "/angle-circle-left.svg";
import poster1 from "../assets/2100x600.png";
import poster2 from "../assets/2100x600_orange.png";
import poster3 from "../assets/2100x600_blue.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const posters = [poster1, poster2, poster3];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % posters.length;
      setCurrentIndex(newIndex);

      if (carouselRef.current) {
        const scrollAmount = carouselRef.current.offsetWidth * newIndex;
        carouselRef.current.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, posters.length]);

  return (
    <div
      style={{
        width: "min(100%, 65rem)",
        position: "relative",
      }}
    >
      <div
        ref={carouselRef}
        style={{
          backgroundColor: "black",
          width: "100%",
          aspectRatio: "21/6",
          borderRadius: "10px",
          overflowX: "hidden",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          display: "flex",
        }}
      >
        {posters.map((poster, index) => (
          <img
            key={index}
            src={poster}
            alt={`Poster ${index + 1}`}
            style={{
              minWidth: "100%",
              height: "100%",
              objectFit: "cover",
              scrollSnapAlign: "start",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translate(-115%, -50%)",
          display: "flex",
          gap: "0.5rem",
        }}
        onClick={() => {
          const newIndex = (currentIndex - 1 + posters.length) % posters.length;
          setCurrentIndex(newIndex);

          if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth * newIndex;
            carouselRef.current.scrollTo({
              left: scrollAmount,
              behavior: "smooth",
            });
          }
        }}
      >
        <img
          src={navButton}
          width={36}
          alt="carousel previous button"
          style={{
            cursor: "pointer",
            filter: "invert(100%)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translate(115%, -50%)",
          display: "flex",
          gap: "0.5rem",
        }}
        onClick={() => {
          const newIndex = (currentIndex + 1) % posters.length;
          setCurrentIndex(newIndex);

          if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth * newIndex;
            carouselRef.current.scrollTo({
              left: scrollAmount,
              behavior: "smooth",
            });
          }
        }}
      >
        <img
          src={navButton}
          width={36}
          alt="carousel previous button"
          style={{
            cursor: "pointer",
            filter: "invert(100%)",
            transform: "rotate(180deg)",
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;
