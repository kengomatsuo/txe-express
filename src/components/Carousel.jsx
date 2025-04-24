import React, { useState, useEffect, useRef } from "react";
import navButton from "/angle-circle-left.svg";

const Carousel = ({posters = []}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

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
        minWidth: "min(90%, 600px)",
        width: "max(90%, 600px)",
        maxWidth: "100%",
        position: "relative",
      }}
      onMouseEnter={() => {
        if (!("ontouchstart" in window)) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (!("ontouchstart" in window)) {
          setIsHovered(false);
        }
      }}
    >
      <div
        ref={carouselRef}
        style={{
          backgroundColor: "black",
          width: "100%",
          aspectRatio: "21/6",
          borderRadius: "10px",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          display: "flex",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {posters.map((poster, index) => (
          <img
            key={index}
            src={poster}
            alt={`Poster ${index + 1}`}
            style={{
              minWidth: "100%",
              minHeight: "100%",
              objectFit: "cover",
              scrollSnapAlign: "center",
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
          transform: isHovered ? "translate(-50%, -50%)" : "translate(0, -50%)",
          display: "flex",
          gap: "0.5rem",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s, transform 0.3s",
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
          transform: isHovered ? "translate(50%, -50%)" : "translate(0, -50%)",
          display: "flex",
          gap: "0.5rem",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s, transform 0.3s",
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
