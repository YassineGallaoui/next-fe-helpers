import { jsx as i } from "react/jsx-runtime";
import { useRef as d, useState as w, useEffect as a } from "react";
const u = () => {
  const e = d(null), [n, t] = w(!0);
  a(() => {
    if (!e.current)
      return;
    const o = (l) => {
      l.key.toLowerCase() === "g" && t((c) => !c);
    };
    return document.addEventListener("keydown", o), () => {
      document.removeEventListener("keydown", o);
    };
  }, []);
  const s = `grid-overlay ${n ? "show" : ""}`.trim();
  return /* @__PURE__ */ i("div", { ref: e, className: s, children: /* @__PURE__ */ i("div", { className: "container", children: /* @__PURE__ */ i("div", { className: "row" }) }) });
};
const y = () => {
  const e = d(null);
  return a(() => {
    const n = e.current;
    n.innerHTML = `<span>${window.innerWidth} x ${window.innerHeight}</span>
                            <span>Aspect ratio: ${(window.innerWidth / window.innerHeight).toFixed(2)}</span>`;
    const t = () => {
      console.log("resize"), n.innerHTML = `<span>${window.innerWidth} x ${window.innerHeight}</span>
                            <span>Aspect ratio: ${(window.innerWidth / window.innerHeight).toFixed(2)}</span>`;
    }, s = (r) => {
      r.key.toLowerCase() === "s" && n.classList.toggle("show");
    };
    return window.addEventListener("resize", t), document.addEventListener("keydown", (r) => s(r)), () => {
      window.removeEventListener("resize", t), document.removeEventListener("keydown", s);
    };
  }, [e]), /* @__PURE__ */ i("div", { ref: e, className: "stats" });
};
export {
  u as GridHelper,
  y as StatsHelper
};
