import React, { useState, useEffect, useRef } from "react";

// Improved scroll spy hook with better section detection logic
const useScrollSpy = (itemIds, options) => {
  const [activeId, setActiveId] = useState(null);
  const observerRef = useRef(null);
  const intersectionDataRef = useRef({});
  
  useEffect(() => {
    // Track intersection ratios for all sections
    intersectionDataRef.current = {};
    
    const callback = (entries) => {
      // Update intersection data for each entry
      entries.forEach(entry => {
        intersectionDataRef.current[entry.target.id] = {
          ratio: entry.intersectionRatio,
          isIntersecting: entry.isIntersecting
        };
      });
      
      // Find the section with the highest visibility ratio
      let maxRatio = 0;
      let maxId = null;
      
      Object.keys(intersectionDataRef.current).forEach(id => {
        const data = intersectionDataRef.current[id];
        if (data.isIntersecting && data.ratio > maxRatio) {
          maxRatio = data.ratio;
          maxId = id;
        }
      });
      
      // Only update if we have a new section with significant visibility
      if (maxId && maxRatio >= (options.threshold || 0.1)) {
        setActiveId(maxId);
        
        // Update URL without page refresh
        const hash = `#${maxId}`;
        if (window.location.hash !== hash) {
          window.history.replaceState(null, null, hash);
        }
      }
    };
    
    // Create observer with root margin to prevent edge detection issues
    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: '-10% 0px -10% 0px', // Ignore edges of viewport
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });
    
    // Observe all section elements
    const elements = itemIds.map(id => document.getElementById(id)).filter(Boolean);
    elements.forEach(el => observerRef.current.observe(el));
    
    return () => {
      if (observerRef.current) {
        elements.forEach(el => observerRef.current.unobserve(el));
        observerRef.current.disconnect();
      }
    };
  }, [itemIds, options]);
  
  return activeId;
};

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
  const manualScrollRef = useRef(false);
  
  // Track sections with improved observer options
  const activeId = useScrollSpy(
    items.map(item => item.id),
    { threshold: 0.3 }
  );
  
  // Update current section when activeId changes from scroll
  useEffect(() => {
    if (activeId && !manualScrollRef.current) {
      setCurrent(activeId);
    }
  }, [activeId, setCurrent]);
  
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
  
  // Initial setup and hash change listener
  useEffect(() => {
    const initialId = window.location.hash.replace("#", "");
    const defaultId = items[0]?.id;
    
    if (initialId && items.some(item => item.id === initialId)) {
      setCurrent(initialId);
    } else if (defaultId) {
      setCurrent(defaultId);
    }
    
    const handleHashChange = () => {
      const hashId = window.location.hash.replace("#", "");
      if (hashId && items.some(item => item.id === hashId)) {
        setCurrent(hashId);
      } else if (defaultId) {
        setCurrent(defaultId);
      }
    };
    
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [items, setCurrent]);
  
  // Update indicator on current change and window resize
  useEffect(() => {
    updateIndicator();
    
    const handleResize = () => {
      if (window.resizeTimer) clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(updateIndicator, 100);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(window.resizeTimer);
    };
  }, [current, items]);
  
  // Smooth scroll with proper handling
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      // Set flag to prevent observer from changing the active section during manual scroll
      manualScrollRef.current = true;
      
      // Update current state and URL immediately
      setCurrent(id);
      window.history.replaceState(null, null, `#${id}`);
      
      // Scroll to element
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Reset the flag after animation completes
      setTimeout(() => {
        manualScrollRef.current = false;
      }, 1000); // Slightly longer than typical smooth scroll duration
    }
  };
  
  return (
    <>
      <nav
        ref={navRef}
        style={{
          backgroundColor: "#f8f8f8",
          position: "fixed",
          width: "100%",
          zIndex: 799,
          overflowX: "scroll",
          scrollbarWidth: "none",
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
                onClick={(e) => handleNavClick(e, item.id)}
                style={{
                  fontWeight: "550",
                  textWrap: "nowrap",
                  padding: "0.8rem 1rem",
                  position: "relative",
                  zIndex: 800,
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
          height: navRef.current ? `${navRef.current.offsetHeight}px` : "3rem",
        }}
      />
    </>
  );
};

export default SubNavbar;