"use client";

import { useEffect, useRef, useState } from "react";
import "./styles.scss";
import type { GridHelperProps } from "./types";

const GridHelper: React.FC<GridHelperProps> = ({ show = false }) => {
  const gridOverlayRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    const overlayElement = gridOverlayRef.current;
    if (!overlayElement) return;

    const keydownHandler = (e: KeyboardEvent) => {
      if (e.altKey && e.code === 'KeyG') {
        setIsVisible((prev) => !prev);
      }
    };

    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  // Sync internal visibility state with show prop
  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  const overlayClassName = `grid-overlay ${isVisible ? " show" : ""}`.trim();

  return (
    <div ref={gridOverlayRef} className={overlayClassName}>
      <div className="container">
        <div className="row">
        </div>
      </div>
    </div>
  );
};

export default GridHelper;