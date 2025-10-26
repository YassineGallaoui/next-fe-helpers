import { jsx as t, jsxs as a, Fragment as _ } from "react/jsx-runtime";
import { useRef as $, useState as m, useEffect as B, useCallback as r } from "react";
const ie = () => {
  const e = $(null), [l, d] = m(!0);
  B(() => {
    if (!e.current)
      return;
    const g = (f) => {
      f.key.toLowerCase() === "g" && d((L) => !L);
    };
    return document.addEventListener("keydown", g), () => {
      document.removeEventListener("keydown", g);
    };
  }, []);
  const w = `grid-overlay ${l ? "show" : ""}`.trim();
  return /* @__PURE__ */ t("div", { ref: e, className: w, children: /* @__PURE__ */ t("div", { className: "container", children: /* @__PURE__ */ t("div", { className: "row" }) }) });
};
const q = ({ tooltip: e, children: l }) => {
  const [d, w] = m(!1), [T, g] = m({ x: 0, y: 0 }), f = $(null), L = r(() => {
    if (f.current) {
      const v = f.current.getBoundingClientRect(), h = document.createElement("div");
      h.className = "stats-tooltip", h.textContent = e, h.style.visibility = "hidden", h.style.position = "fixed", document.body.appendChild(h);
      const p = h.getBoundingClientRect(), s = f.current.closest(".stats"), x = s == null ? void 0 : s.getBoundingClientRect(), P = (s == null ? void 0 : s.classList.contains("pos-tl")) || (s == null ? void 0 : s.classList.contains("pos-bl")), C = (s == null ? void 0 : s.classList.contains("pos-bl")) || (s == null ? void 0 : s.classList.contains("pos-br"));
      let n, b;
      P ? n = v.left - p.width - 5 : (console.log("else", v.left, p.width, v.left - p.width - 5), n = -p.width - 5), C ? b = v.top - ((x == null ? void 0 : x.top) || 0) - p.height - 20 : (console.log("else"), b = v.bottom - 5), n < 5 && (n = 5), n + p.width > window.innerWidth - 5 && (console.log("TROPPO"), n = window.innerWidth - p.width - 5), document.body.removeChild(h), g({ x: n, y: b }), w(!0);
    }
  }, [e]), N = r(() => {
    w(!1);
  }, []);
  return /* @__PURE__ */ a(_, { children: [
    /* @__PURE__ */ t(
      "span",
      {
        ref: f,
        className: "info-icon",
        onMouseEnter: L,
        onMouseLeave: N,
        children: l
      }
    ),
    d && /* @__PURE__ */ t(
      "div",
      {
        className: "stats-tooltip",
        style: {
          left: T.x,
          top: T.y
        },
        children: e
      }
    )
  ] });
}, i = ({ label: e, value: l, tooltip: d }) => /* @__PURE__ */ a("div", { className: "s-l", children: [
  /* @__PURE__ */ a("div", { className: "l-v", children: [
    e,
    ": ",
    l
  ] }),
  d && /* @__PURE__ */ t(q, { tooltip: d, children: "ⓘ" })
] }), S = ({ title: e, children: l }) => /* @__PURE__ */ a("div", { className: "s-c", children: [
  /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("strong", { children: e }) }),
  l
] }), K = ({ position: e, onPositionChange: l, onClose: d }) => /* @__PURE__ */ a("div", { className: "stats-controls", children: [
  /* @__PURE__ */ t(
    "button",
    {
      className: `stats-btn ${e === "tl" ? "active" : ""}`,
      onClick: () => l("tl"),
      title: "Top Left",
      children: "TL"
    }
  ),
  /* @__PURE__ */ t(
    "button",
    {
      className: `stats-btn ${e === "tr" ? "active" : ""}`,
      onClick: () => l("tr"),
      title: "Top Right",
      children: "TR"
    }
  ),
  /* @__PURE__ */ t(
    "button",
    {
      className: `stats-btn ${e === "bl" ? "active" : ""}`,
      onClick: () => l("bl"),
      title: "Bottom Left",
      children: "BL"
    }
  ),
  /* @__PURE__ */ t(
    "button",
    {
      className: `stats-btn ${e === "br" ? "active" : ""}`,
      onClick: () => l("br"),
      title: "Bottom Right",
      children: "BR"
    }
  ),
  /* @__PURE__ */ t(
    "button",
    {
      className: "stats-close-btn",
      onClick: d,
      title: "Close Stats",
      children: "×"
    }
  )
] }), Y = ({ displayInfo: e }) => /* @__PURE__ */ a(S, { title: "DISPLAY", children: [
  /* @__PURE__ */ t(
    i,
    {
      label: "Screen",
      value: e.screen,
      tooltip: "Physical display dimensions - your actual monitor/device screen size"
    }
  ),
  /* @__PURE__ */ t(
    i,
    {
      label: "Viewport",
      value: e.viewport,
      tooltip: "Browser content area - excludes address bar, bookmarks, scrollbars"
    }
  ),
  /* @__PURE__ */ t(
    i,
    {
      label: "Available",
      value: e.available,
      tooltip: "Screen space minus OS UI - area where applications can be positioned"
    }
  ),
  /* @__PURE__ */ t(
    i,
    {
      label: "Aspect Ratio",
      value: e.aspectRatio
    }
  ),
  /* @__PURE__ */ t(
    i,
    {
      label: "DPR",
      value: e.dpr,
      tooltip: "Device Pixel Ratio - how many physical pixels equal one CSS pixel. Higher values indicate high-DPI displays"
    }
  )
] }), Q = ({ frameInfo: e }) => /* @__PURE__ */ a(S, { title: "RENDERING", children: [
  /* @__PURE__ */ t(i, { label: "FPS", value: e.fps }),
  /* @__PURE__ */ t(
    i,
    {
      label: "Frame Jitter",
      value: `${e.animationFrameJitter}ms`,
      tooltip: "Animation frame timing variance. Lower values indicate smoother animations. Good: <2ms, Fair: 2-5ms, Poor: >5ms"
    }
  ),
  /* @__PURE__ */ t(
    i,
    {
      label: "Frame Drops",
      value: e.frameDrops,
      tooltip: "Number of dropped frames (>33ms) - fewer drops indicate better performance"
    }
  )
] }), X = ({ scrollInfo: e }) => /* @__PURE__ */ a(S, { title: "SCROLL", children: [
  /* @__PURE__ */ t(
    i,
    {
      label: "Position",
      value: /* @__PURE__ */ a(_, { children: [
        /* @__PURE__ */ a("span", { children: [
          e.position,
          "px"
        ] }),
        " (",
        /* @__PURE__ */ a("span", { children: [
          e.percent,
          "%"
        ] }),
        ")"
      ] })
    }
  ),
  /* @__PURE__ */ t(i, { label: "Page Height", value: `${e.pageHeight}px` })
] }), Z = ({ themeInfo: e }) => /* @__PURE__ */ a(S, { title: "THEME", children: [
  /* @__PURE__ */ t(i, { label: "Color Scheme", value: e.colorScheme }),
  /* @__PURE__ */ t(
    i,
    {
      label: "Contrast",
      value: e.contrast,
      tooltip: "User's system preference for contrast levels. High contrast improves text readability for accessibility"
    }
  ),
  /* @__PURE__ */ t(
    i,
    {
      label: "Reduced Motion",
      value: e.reducedMotion,
      tooltip: "User's preference to minimize animations and motion effects for accessibility or motion sensitivity"
    }
  )
] }), ee = ({ deviceInfo: e }) => /* @__PURE__ */ a(S, { title: "DEVICE", children: [
  /* @__PURE__ */ t(i, { label: "Touch", value: e.touchPoints }),
  /* @__PURE__ */ t(i, { label: "Hover", value: e.hover }),
  /* @__PURE__ */ t(i, { label: "Orientation", value: e.orientation })
] }), te = ({ browserInfo: e }) => /* @__PURE__ */ a(S, { title: "BROWSER", children: [
  /* @__PURE__ */ t(i, { label: "Engine", value: e.engine }),
  /* @__PURE__ */ t(i, { label: "GPU", value: e.gpu })
] }), se = () => {
  const [e, l] = m(!1), [d, w] = m("tl"), [T, g] = m({
    frameDrops: 0,
    fps: 0,
    animationFrameJitter: 0
  }), [f, L] = m({
    screen: "",
    viewport: "",
    available: "",
    aspectRatio: "",
    dpr: 1
  }), [N, v] = m({
    position: 0,
    percent: 0,
    pageHeight: 0
  }), [h, p] = m({
    colorScheme: "",
    contrast: "",
    reducedMotion: ""
  }), [s, x] = m({
    touchPoints: "",
    hover: "",
    orientation: ""
  }), [P, C] = m({
    engine: "",
    gpu: ""
  }), n = $({
    frameCount: 0,
    lastTime: performance.now(),
    frameTimes: [],
    frameDrops: 0,
    lastFrameTime: performance.now(),
    animationFrameId: null
  }), b = r(() => {
    const o = navigator.userAgent;
    return o.includes("Chrome") ? "Blink" : o.includes("Firefox") ? "Gecko" : o.includes("Safari") && !o.includes("Chrome") ? "WebKit" : o.includes("Edge") ? "EdgeHTML/Blink" : "Unknown";
  }, []), A = r(() => {
    try {
      const o = document.createElement("canvas"), c = o.getContext("webgl") || o.getContext("experimental-webgl");
      if (c && "getExtension" in c) {
        const u = c, E = u.getExtension("WEBGL_debug_renderer_info");
        return E ? u.getParameter(E.UNMASKED_RENDERER_WEBGL) : "WebGL Available";
      }
      return "No WebGL";
    } catch {
      return "Unknown";
    }
  }, []), y = r(() => {
    L({
      screen: `${screen.width}x${screen.height}`,
      viewport: `${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`,
      available: `${screen.availWidth}x${screen.availHeight}`,
      aspectRatio: (window.innerWidth / window.innerHeight).toFixed(2),
      dpr: window.devicePixelRatio
    });
  }, []), R = r(() => {
    const o = Math.round(window.scrollY), c = document.body.scrollHeight, u = window.innerHeight, E = c > u ? Math.round(o / (c - u) * 100) : 0;
    v({
      position: o,
      percent: E,
      pageHeight: c
    });
  }, []), W = r(() => {
    const o = window.matchMedia("(prefers-contrast: high)").matches, c = window.matchMedia("(prefers-contrast: more)").matches, u = o || c ? "High" : "Normal";
    p({
      colorScheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "Dark" : "Light",
      contrast: u,
      reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "true" : "false"
    });
  }, []), G = r(() => {
    x({
      touchPoints: navigator.maxTouchPoints > 0 ? `true (${navigator.maxTouchPoints})` : "false",
      hover: window.matchMedia("(hover: hover)").matches ? "true" : "false",
      orientation: screen.orientation ? `${screen.orientation.angle}°` : "Unknown"
    });
  }, []), O = r(() => {
    C({
      engine: b(),
      gpu: A()
    });
  }, [b, A]), U = r(() => {
    y(), R(), W(), G(), O();
  }, [y, R, W, G, O]), F = r(() => {
    n.current.frameCount++;
    const o = performance.now(), c = o - n.current.lastTime, u = o - n.current.lastFrameTime;
    if (n.current.frameTimes.push(u), n.current.frameTimes.length > 60 && n.current.frameTimes.shift(), n.current.lastFrameTime = o, u > 33 && n.current.frameDrops++, c >= 500) {
      const E = Math.round(n.current.frameCount * 1e3 / c);
      let V = 0;
      if (n.current.frameTimes.length >= 2) {
        const z = n.current.frameTimes.slice(1).map((M, H) => Math.abs(M - n.current.frameTimes[H]));
        V = Math.round(z.reduce((M, H) => M + H, 0) / z.length * 100) / 100;
      }
      g({
        fps: E,
        frameDrops: n.current.frameDrops,
        animationFrameJitter: V
      }), n.current.frameCount = 0, n.current.lastTime = o;
    }
    n.current.animationFrameId = requestAnimationFrame(F);
  }, []), J = r((o) => {
    w(o);
  }, []), j = r(() => {
    l(!1);
  }, []), k = r((o) => {
    o.key.toLowerCase() === "s" && l((c) => !c);
  }, []), D = r(() => {
    y();
  }, [y]), I = r(() => {
    R();
  }, [R]);
  return B(() => (U(), n.current.animationFrameId = requestAnimationFrame(F), window.addEventListener("resize", D), window.addEventListener("scroll", I), document.addEventListener("keydown", k), () => {
    window.removeEventListener("resize", D), window.removeEventListener("scroll", I), document.removeEventListener("keydown", k), n.current.animationFrameId && cancelAnimationFrame(n.current.animationFrameId);
  }), [U, F, D, I, k]), B(() => {
    y();
  }, [y]), e ? /* @__PURE__ */ a("div", { className: `stats show pos-${d}`, children: [
    /* @__PURE__ */ t(
      K,
      {
        position: d,
        onPositionChange: J,
        onClose: j
      }
    ),
    /* @__PURE__ */ a("div", { className: "s-d", children: [
      /* @__PURE__ */ t(Y, { displayInfo: f }),
      /* @__PURE__ */ t(Q, { frameInfo: T }),
      /* @__PURE__ */ t(X, { scrollInfo: N }),
      /* @__PURE__ */ t(Z, { themeInfo: h }),
      /* @__PURE__ */ t(ee, { deviceInfo: s }),
      /* @__PURE__ */ t(te, { browserInfo: P })
    ] })
  ] }) : null;
};
export {
  ie as GridHelper,
  se as StatsHelper
};
