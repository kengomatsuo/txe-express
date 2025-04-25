import React from "react";
import Carousel from "../components/Carousel";
import promoBg from "/home-bg.jpg";
import poster1 from "../assets/2100x600.png";
import poster2 from "../assets/2100x600_orange.png";
import poster3 from "../assets/2100x600_blue.png";

const Promo = () => {
  const promos = [
    {
      title: "DISKON Lebaran",
      dateRange: {
        start: new Date(2025, 4, 8),
        end: new Date(2025, 4, 30),
      },
      image: poster1,
    },
    {
      title: "DISKON 5.5",
      dateRange: {
        start: new Date(2025, 4, 5),
        end: new Date(2025, 4, 5),
      },
      image: poster1,
    },
    {
      title: "DISKON 25 Mei",
      dateRange: {
        start: new Date(2025, 4, 25),
        end: new Date(2025, 4, 25),
      },
      image: poster1,
    },
  ];

  return (
    <div
      style={{
        marginTop: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={promoBg}
        alt="Background"
        style={{
          position: "fixed",
          top: 0,
          minWidth: "110%",
          minHeight: "110%",
          aspectRatio: "initial",
          filter: "blur(10px)",
          zIndex: -1,
        }}
      />
      <Carousel posters={[poster1, poster2, poster3]} />
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "4rem 5%"
        }}
      >
        <div
          style={{
            minWidth: "min(100%, 600px)",
            width: "max(100%, 600px)",
            maxWidth: "100%",
            display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          }}
        >
          {promos.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  aspectRatio: 2 / 1,
                }}
              />
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: "1rem 0 0 0",
                  }}
                >
                  {`${item.dateRange.start.toLocaleDateString()} - ${item.dateRange.end.toLocaleDateString()}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Promo;
