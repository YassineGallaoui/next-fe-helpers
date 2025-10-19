"use client";

import { useEffect, useRef, useState } from "react";

const GridHelper = () => {
  const gridOverlayRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const overlayElement = gridOverlayRef.current;
    if (!overlayElement) return;

    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "g") {
        setIsVisible((prev) => !prev);
      }
    };

    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  const overlayClassName = `grid-overlay ${isVisible ? "show" : ""}`.trim();

  return (
    <div ref={gridOverlayRef} className={overlayClassName}>
      <div className="container">
        <div className="row">
          {/* No individual columns are created in grid.js logic */}
        </div>
      </div>
    </div>
  );
};

export default GridHelper;