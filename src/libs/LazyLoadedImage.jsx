import React, { useRef, useEffect, useState } from "react";

const LazyLoadedImage = ({ src, alt, className }) => {
  const imageRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [imageRef]);

  return (
    <img
      src={isIntersecting ? src : ""}
      className={className}
      loading="lazy"
      alt={alt}
      ref={imageRef}
      style={{ filter: src ? "none" : "blur(5px)" }}
    />
  );
};

export default LazyLoadedImage;
