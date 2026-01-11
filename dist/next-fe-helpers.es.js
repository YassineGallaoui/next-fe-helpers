import { jsx as t, jsxs as c, Fragment as z } from "react/jsx-runtime";
import { useRef as B, useState as h, useEffect as N, useCallback as a } from "react";
const re = ({
  show: e = !1,
  columnsColor: s = void 0,
  columnsBorderColor: d = void 0,
  columnsBorderWidth: v = void 0,
  columnsBorderStyle: b = void 0
}) => {
  const E = B(null), [g, S] = h(e);
  N(() => {
    if (!E.current)
      return;
    const m = (i) => {
      i.altKey && i.code === "KeyG" && S((y) => !y);
    };
    return document.addEventListener("keydown", m), () => {
      document.removeEventListener("keydown", m);
    };
  }, []), N(() => {
    S(e);
  }, [e]);
  const R = `grid-overlay ${g ? " show" : ""}`.trim(), w = {
    ...s && { "--grid-columns-color": s },
    ...d && {
      "--grid-columns-border-color": d
    },
    ...v && {
      "--grid-columns-border-width": v
    },
    ...b && {
      "--grid-columns-border-style": b
    }
  };
  return /* @__PURE__ */ t(
    "div",
    {
      ref: E,
      className: R,
      style: w,
      children: /* @__PURE__ */ t("div", { className: "container", children: /* @__PURE__ */ t("div", { className: "row", children: Array.from({ length: 12 }).map((u, m) => /* @__PURE__ */ t("div", { className: "col-guide" }, m)) }) })
    }
  );
};
const q = ({ tooltip: e, children: s }) => {
  const [d, v] = h(!1), [b, E] = h({ x: 0, y: 0 }), g = B(null), S = a(() => {
    if (g.current) {
      const w = g.current.getBoundingClientRect(), u = document.createElement("div");
      u.className = "stats-tooltip", u.textContent = e, u.style.visibility = "hidden", u.style.position = "fixed", document.body.appendChild(u);
      const m = u.getBoundingClientRect(), i = g.current.closest(".stats"), y = i == null ? void 0 : i.getBoundingClientRect(), D = (i == null ? void 0 : i.classList.contains("pos-tl")) || (i == null ? void 0 : i.classList.contains("pos-bl")), P = (i == null ? void 0 : i.classList.contains("pos-bl")) || (i == null ? void 0 : i.classList.contains("pos-br"));
      let f, o;
      D ? f = w.left - m.width - 5 : f = -m.width - 5, P ? o = w.top - ((y == null ? void 0 : y.top) || 0) - m.height - 20 : o = w.bottom - 5, f < 5 && (f = 5), f + m.width > window.innerWidth - 5 && (f = window.innerWidth - m.width - 5), document.body.removeChild(u), E({ x: f, y: o }), v(!0);
    }
  }, [e]), R = a(() => {
    v(!1);
  }, []);
  return /* @__PURE__ */ c(z, { children: [
    /* @__PURE__ */ t(
      "span",
      {
        ref: g,
        className: "info-icon",
        onMouseEnter: S,
        onMouseLeave: R,
        children: s
      }
    ),
    d && /* @__PURE__ */ t(
      "div",
      {
        className: "stats-tooltip",
        style: {
          left: b.x,
          top: b.y
        },
        children: e
      }
    )
  ] });
}, r = ({ label: e, value: s, tooltip: d }) => /* @__PURE__ */ c("div", { className: "s-l", children: [
  /* @__PURE__ */ c("div", { className: "l-v", children: [
    e,
    ": ",
    s
  ] }),
  d && /* @__PURE__ */ t(q, { tooltip: d, children: "ⓘ" })
] }), x = ({ title: e, children: s }) => /* @__PURE__ */ c("div", { className: "s-c", children: [
  /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("strong", { children: e }) }),
  s
] }), Y = ({ position: e, onPositionChange: s, onClose: d }) => /* @__PURE__ */ c("div", { className: "stats-controls", children: [
  /* @__PURE__ */ t(
    "button",
    {
      className: `stats-btn ${e === "tl" ? "active" : ""}`,
      onClick: () => s("tl"),
      title: "Top Left",
      children: "TL"
    }
  ),
  /* @__PURE__ */ t(
    "button",
    {
      className: `stats-btn ${e === "tr" ? "active" : ""}`,
      onClick: () => s("tr"),
      title: "Top Right",
      children: "TR"
    }
  ),
  /* @__PURE__ */ t(
    "button",
    {
      className: `stats-btn ${e === "bl" ? "active" : ""}`,
      onClick: () => s("bl"),
      title: "Bottom Left",
      children: "BL"
    }
  ),
  /* @__PURE__ */ t(
    "button",
    {
      className: `stats-btn ${e === "br" ? "active" : ""}`,
      onClick: () => s("br"),
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
] }), Q = ({ displayInfo: e }) => /* @__PURE__ */ c(x, { title: "DISPLAY", children: [
  /* @__PURE__ */ t(
    r,
    {
      label: "Screen",
      value: e.screen,
      tooltip: "Physical display dimensions - your actual monitor/device screen size"
    }
  ),
  /* @__PURE__ */ t(
    r,
    {
      label: "Viewport",
      value: e.viewport,
      tooltip: "Browser content area - excludes address bar, bookmarks, scrollbars"
    }
  ),
  /* @__PURE__ */ t(
    r,
    {
      label: "Available",
      value: e.available,
      tooltip: "Screen space minus OS UI - area where applications can be positioned"
    }
  ),
  /* @__PURE__ */ t(
    r,
    {
      label: "Aspect Ratio",
      value: e.aspectRatio
    }
  ),
  /* @__PURE__ */ t(
    r,
    {
      label: "DPR",
      value: e.dpr,
      tooltip: "Device Pixel Ratio - how many physical pixels equal one CSS pixel. Higher values indicate high-DPI displays"
    }
  )
] }), X = ({ frameInfo: e }) => /* @__PURE__ */ c(x, { title: "RENDERING", children: [
  /* @__PURE__ */ t(r, { label: "FPS", value: e.fps }),
  /* @__PURE__ */ t(
    r,
    {
      label: "Frame Jitter",
      value: `${e.animationFrameJitter}ms`,
      tooltip: "Animation frame timing variance. Lower values indicate smoother animations. Good: <2ms, Fair: 2-5ms, Poor: >5ms"
    }
  ),
  /* @__PURE__ */ t(
    r,
    {
      label: "Frame Drops",
      value: e.frameDrops,
      tooltip: "Number of dropped frames (>33ms) - fewer drops indicate better performance"
    }
  )
] }), Z = ({ scrollInfo: e }) => /* @__PURE__ */ c(x, { title: "SCROLL", children: [
  /* @__PURE__ */ t(
    r,
    {
      label: "Position",
      value: /* @__PURE__ */ c(z, { children: [
        /* @__PURE__ */ c("span", { children: [
          e.position,
          "px"
        ] }),
        " (",
        /* @__PURE__ */ c("span", { children: [
          e.percent,
          "%"
        ] }),
        ")"
      ] })
    }
  ),
  /* @__PURE__ */ t(r, { label: "Page Height", value: `${e.pageHeight}px` })
] }), ee = ({ themeInfo: e }) => /* @__PURE__ */ c(x, { title: "THEME", children: [
  /* @__PURE__ */ t(r, { label: "Color Scheme", value: e.colorScheme }),
  /* @__PURE__ */ t(
    r,
    {
      label: "Contrast",
      value: e.contrast,
      tooltip: "User's system preference for contrast levels. High contrast improves text readability for accessibility"
    }
  ),
  /* @__PURE__ */ t(
    r,
    {
      label: "Reduced Motion",
      value: e.reducedMotion,
      tooltip: "User's preference to minimize animations and motion effects for accessibility or motion sensitivity"
    }
  )
] }), te = ({ deviceInfo: e }) => /* @__PURE__ */ c(x, { title: "DEVICE", children: [
  /* @__PURE__ */ t(r, { label: "Touch", value: e.touchPoints }),
  /* @__PURE__ */ t(r, { label: "Hover", value: e.hover }),
  /* @__PURE__ */ t(r, { label: "Orientation", value: e.orientation })
] }), ne = ({ browserInfo: e }) => /* @__PURE__ */ c(x, { title: "BROWSER", children: [
  /* @__PURE__ */ t(r, { label: "Engine", value: e.engine }),
  /* @__PURE__ */ t(r, { label: "GPU", value: e.gpu })
] }), se = ({ show: e = !1 }) => {
  const [s, d] = h(e), [v, b] = h("tl"), [E, g] = h({
    frameDrops: 0,
    fps: 0,
    animationFrameJitter: 0
  }), [S, R] = h({
    screen: "",
    viewport: "",
    available: "",
    aspectRatio: "",
    dpr: 1
  }), [w, u] = h({
    position: 0,
    percent: 0,
    pageHeight: 0
  }), [m, i] = h({
    colorScheme: "",
    contrast: "",
    reducedMotion: ""
  }), [y, D] = h({
    touchPoints: "",
    hover: "",
    orientation: ""
  }), [P, f] = h({
    engine: "",
    gpu: ""
  }), o = B({
    frameCount: 0,
    lastTime: performance.now(),
    frameTimes: [],
    frameDrops: 0,
    lastFrameTime: performance.now(),
    animationFrameId: null
  }), A = a(() => {
    const n = navigator.userAgent;
    return n.includes("Chrome") ? "Blink" : n.includes("Firefox") ? "Gecko" : n.includes("Safari") && !n.includes("Chrome") ? "WebKit" : n.includes("Edge") ? "EdgeHTML/Blink" : "Unknown";
  }, []), G = a(() => {
    try {
      const n = document.createElement("canvas"), l = n.getContext("webgl") || n.getContext("experimental-webgl");
      if (l && "getExtension" in l) {
        const p = l, L = p.getExtension("WEBGL_debug_renderer_info");
        return L ? p.getParameter(L.UNMASKED_RENDERER_WEBGL) : "WebGL Available";
      }
      return "No WebGL";
    } catch {
      return "Unknown";
    }
  }, []), T = a(() => {
    R({
      screen: `${screen.width}x${screen.height}`,
      viewport: `${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`,
      available: `${screen.availWidth}x${screen.availHeight}`,
      aspectRatio: (window.innerWidth / window.innerHeight).toFixed(2),
      dpr: window.devicePixelRatio
    });
  }, []), F = a(() => {
    const n = Math.round(window.scrollY), l = document.body.scrollHeight, p = window.innerHeight, L = l > p ? Math.round(n / (l - p) * 100) : 0;
    u({
      position: n,
      percent: L,
      pageHeight: l
    });
  }, []), W = a(() => {
    const n = window.matchMedia("(prefers-contrast: high)").matches, l = window.matchMedia("(prefers-contrast: more)").matches, p = n || l ? "High" : "Normal";
    i({
      colorScheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "Dark" : "Light",
      contrast: p,
      reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "true" : "false"
    });
  }, []), U = a(() => {
    D({
      touchPoints: navigator.maxTouchPoints > 0 ? `true (${navigator.maxTouchPoints})` : "false",
      hover: window.matchMedia("(hover: hover)").matches ? "true" : "false",
      orientation: screen.orientation ? `${screen.orientation.angle}°` : "Unknown"
    });
  }, []), K = a(() => {
    f({
      engine: A(),
      gpu: G()
    });
  }, [A, G]), O = a(() => {
    T(), F(), W(), U(), K();
  }, [T, F, W, U, K]), k = a(() => {
    o.current.frameCount++;
    const n = performance.now(), l = n - o.current.lastTime, p = n - o.current.lastFrameTime;
    if (o.current.frameTimes.push(p), o.current.frameTimes.length > 60 && o.current.frameTimes.shift(), o.current.lastFrameTime = n, p > 33 && o.current.frameDrops++, l >= 500) {
      const L = Math.round(o.current.frameCount * 1e3 / l);
      let V = 0;
      if (o.current.frameTimes.length >= 2) {
        const _ = o.current.frameTimes.slice(1).map((H, $) => Math.abs(H - o.current.frameTimes[$]));
        V = Math.round(_.reduce((H, $) => H + $, 0) / _.length * 100) / 100;
      }
      g({
        fps: L,
        frameDrops: o.current.frameDrops,
        animationFrameJitter: V
      }), o.current.frameCount = 0, o.current.lastTime = n;
    }
    o.current.animationFrameId = requestAnimationFrame(k);
  }, []), J = a((n) => {
    b(n);
  }, []), j = a(() => {
    d(!1);
  }, []), I = a((n) => {
    n.altKey && n.code === "KeyS" && d((l) => !l);
  }, []), M = a(() => {
    T();
  }, [T]), C = a(() => {
    F();
  }, [F]);
  return N(() => (O(), o.current.animationFrameId = requestAnimationFrame(k), window.addEventListener("resize", M), window.addEventListener("scroll", C), document.addEventListener("keydown", I), () => {
    window.removeEventListener("resize", M), window.removeEventListener("scroll", C), document.removeEventListener("keydown", I), o.current.animationFrameId && cancelAnimationFrame(o.current.animationFrameId);
  }), [O, k, M, C, I]), N(() => {
    T();
  }, [T]), N(() => {
    d(e);
  }, [e]), s ? /* @__PURE__ */ c("div", { className: `stats pos-${v} ${s ? " show" : ""}`, children: [
    /* @__PURE__ */ t(
      Y,
      {
        position: v,
        onPositionChange: J,
        onClose: j
      }
    ),
    /* @__PURE__ */ c("div", { className: "s-d", children: [
      /* @__PURE__ */ t(Q, { displayInfo: S }),
      /* @__PURE__ */ t(X, { frameInfo: E }),
      /* @__PURE__ */ t(Z, { scrollInfo: w }),
      /* @__PURE__ */ t(ee, { themeInfo: m }),
      /* @__PURE__ */ t(te, { deviceInfo: y }),
      /* @__PURE__ */ t(ne, { browserInfo: P })
    ] })
  ] }) : null;
};
export {
  re as GridHelper,
  se as StatsHelper
};
