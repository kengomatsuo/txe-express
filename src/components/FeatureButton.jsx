import React, { useState } from "react";
import { Link } from "react-router-dom";

const FeatureButton = ({ item, index }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Link
      key={index}
      to={item.path}
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        backgroundColor: isPressed ? "rgba(255, 255, 255, 0.5)" : "transparent",
      }}
      onPointerDown={() => {
        setIsPressed(true);
      }}
      onPointerUp={() => {
        setIsPressed(false);
      }}
      onPointerCancel={() => {
        setIsPressed(false);
      }}
    >
      <div
        style={{
          alignItems: "center",
          gap: "10px",
          padding: "1rem",
          flexDirection: "column",
          display: "flex",
          width: "100%",
          height: "100%",
          transition: "transform 0.2s",
          scale: isPressed ? "0.97" : "1",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <img
          src={item.icon}
          alt={item.label}
          style={{ width: "2.3rem", height: "2.3rem" }}
        />
        <label
          style={{
            cursor: "pointer",
          }}
        >
          {item.label}
        </label>
      </div>
    </Link>
  );
};

export default FeatureButton;
