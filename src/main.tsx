import { StrictMode, useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

function ScrollManager() {
  const location = useLocation();
  const pageKey = `scroll-position:${location.pathname}${location.search}`;

  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    const savedPosition = sessionStorage.getItem(pageKey);
    const position = savedPosition ? Number(savedPosition) : 0;
    const frame = window.requestAnimationFrame(() =>
      window.scrollTo(0, position),
    );
    const savePosition = () =>
      sessionStorage.setItem(pageKey, String(window.scrollY));

    window.addEventListener("scroll", savePosition, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      savePosition();
      window.removeEventListener("scroll", savePosition);
    };
  }, [pageKey]);

  return null;
}

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <ScrollManager />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
