import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const routePath = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [routePath]);

  return null;
}

export default ScrollToTop;
