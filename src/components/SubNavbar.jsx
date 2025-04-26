import React, { useState, useEffect, useRef } from "react";

const SubNavbar = ({ items, current, setCurrent }) => {
  const [indicatorStyle, setIndicatorStyle] = useState({
    position: "absolute",
    height: "3px",
    backgroundColor: "#3b82f6",
    bottom: 0,
    width: 0,
    left: 0,
    transition: "all 0.3s ease",
  });

  const navRef = useRef(null);
  const linksRef = useRef([]);

  const updateIndicator = () => {
    const currentIndex = items.findIndex((item) => item.id === current);
    if (currentIndex === -1 || !linksRef.current[currentIndex]) return;

    const activeLink = linksRef.current[currentIndex];
    const navLeft = navRef.current.getBoundingClientRect().left;
    const linkLeft = activeLink.getBoundingClientRect().left;

    setIndicatorStyle((prev) => ({
      ...prev,
      width: `${activeLink.offsetWidth}px`,
      left: `${linkLeft - navLeft}px`,
    }));
  };

  useEffect(() => {
    setCurrent(window.location.hash.replace("#", "") || items[0].id);

    const handleHashChange = () => {
      setCurrent(window.location.hash.replace("#", "") || items[0].id);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateIndicator();

    window.addEventListener("resize", updateIndicator);
    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, items]);

  return (
    <>
      <nav
        ref={navRef}
        style={{
          backgroundColor: "#f8f8f8",
          position: "fixed",
          width: "100%",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            padding: "0 1rem",
            margin: 0,
            position: "relative",
          }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
              }}
            >
              <a
                ref={(el) => (linksRef.current[index] = el)}
                href={`#${item.id}`}
                style={{
                  fontWeight: "550",
                  padding: "0.8rem 1rem",
                  position: "relative",
                  zIndex: 10,
                  color: current === item.id ? "#2563eb" : "#4b5563",
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
          <div style={indicatorStyle} />
        </ul>
      </nav>
      <div
        style={{
          height: navRef.current ? `${navRef.current.offsetHeight}px` : "3rem", // Dynamically get the height of the subnavbar
        }}
      />
    </>
  );
};

export default SubNavbar;
