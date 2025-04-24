import React from "react";
import mainLogo from "/logo_color.png";
import burgerIcon from "/menu-burger.svg";
import globeIcon from "/globe.svg";

const Navbar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#fff",
        zIndex: 1000,
        height: "4rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 16px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div style={{ flex: 1 }}>
        <a
          style={{
            backgroundColor: "#f3f3f3",
            borderRadius: "4px",
            display: "flex",
            padding: "0.25rem 0.4rem",
            alignItems: "center",
            gap: "0.4rem",
            width: "fit-content",
          }}
        >
          <img
            src={globeIcon}
            alt="Menu icon"
            style={{
              height: "1.5rem",
              width: "auto",
            }}
          />
          ID
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={mainLogo}
          alt="TXE Express logo"
          style={{
            height: "2rem",
            width: "auto",
          }}
        />
      </div>
      <div
        style={{
          flex: 1,
          justifyContent: "end",
          display: "flex",
        }}
      >
        <a
          style={{
            backgroundColor: "#f3f3f3",
            borderRadius: "4px",
            display: "flex",
            padding: "0.25rem 0.4rem",
            alignItems: "center",
            width: "fit-content",
          }}
        >
          <img
            src={burgerIcon}
            alt="Menu icon"
            style={{
              height: "1.5rem",
              width: "auto",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
