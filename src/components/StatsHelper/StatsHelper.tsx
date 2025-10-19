"use client";

import { useEffect, useRef } from "react";
import "./styles.scss";

const StatsHelper = () => {
  const statsOverlay = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tag = statsOverlay.current as Element;

    tag.innerHTML = `<span>${window.innerWidth} x ${window.innerHeight}</span>
                            <span>Aspect ratio: ${(window.innerWidth / window.innerHeight).toFixed(2)}</span>`;

    const resizeHandler = () => {
      console.log("resize");
      tag.innerHTML = `<span>${window.innerWidth} x ${window.innerHeight}</span>
                            <span>Aspect ratio: ${(window.innerWidth / window.innerHeight).toFixed(2)}</span>`;
    };

    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "s") {
        tag.classList.toggle("show");
      }
    };

    window.addEventListener("resize", resizeHandler);
    document.addEventListener("keydown", (e) => keydownHandler(e));

    return () => {
      window.removeEventListener("resize", resizeHandler);
      document.removeEventListener("keydown", keydownHandler);
    };
  }, [statsOverlay]);

  return <div ref={statsOverlay} className="stats"></div>;
};

export default StatsHelper;