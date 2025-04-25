import React, { useState } from "react";
import mainLogo from "/logo_color.png";
import burgerIcon from "/menu-burger.svg";
import globeIcon from "/globe.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const pages = [
    { name: "Beranda", path: "/" },
    { name: "Produk & Layanan", path: "products" },
    { name: "Promo", path: "promo" },
    { name: "Berita", path: "news" },
    { name: "Hubungi Kami", path: "contact" },
  ];

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
      <Link
      to={"/"}
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
      </Link>
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
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
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
      <div
        style={{
          zIndex: 5,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "100%",
          width: "100%",
          backgroundColor: isNavbarOpen
            ? "rgba(0, 0, 0, 0.2)"
            : "transparent",
          backdropFilter: isNavbarOpen ? "blur(5px)" : "none",
          pointerEvents: isNavbarOpen ? "unset" : "none",
          transition: "all 0.3s",
        }}
        onClick={() => setIsNavbarOpen(false)}
      />
      <nav
        style={{
          zIndex: 10,
          position: "fixed",
          top: 0,
          right: 0,
          padding: "3rem 2rem",
          backgroundColor: "white",
          width: "600px",
          maxWidth: "80%",
          height: "100%",
          transform: isNavbarOpen ? "none" : "translate(100%, 0)",
          transition: "transform 0.3s",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {pages.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                style={({ isActive }) => {
                  return {
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    color: isActive ? "#1b56a6" : "#404040",
                  };
                }}
                onClick={() => setIsNavbarOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
