"use client";

import { useEffect, useRef, useState } from "react";
import "./styles.scss";
import type { GridHelperProps } from "./types";

const GridHelper: React.FC<GridHelperProps> = ({
  show = false,
  columnsColor = undefined,
  columnsBorderColor = undefined,
  columnsBorderWidth = undefined,
  columnsBorderStyle = undefined
}) => {
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

  const gridStyles = {
    ...(columnsColor && { "--grid-columns-color": columnsColor }),
    ...(columnsBorderColor && {
      "--grid-columns-border-color": columnsBorderColor,
    }),
    ...(columnsBorderWidth && {
      "--grid-columns-border-width": columnsBorderWidth,
    }),
    ...(columnsBorderStyle && {
      "--grid-columns-border-style": columnsBorderStyle,
    }),
  } as React.CSSProperties;

  return (
    <div
      ref={gridOverlayRef}
      className={overlayClassName}
      style={gridStyles}
    >
      <div className="container">
        <div className="row">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="col-guide" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridHelper;