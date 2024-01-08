import React, { useEffect, useState } from "react";
import { NextBtn, PreviousBtn } from "../CarouselButtons";
import Slider from "react-slick";
import LabCard from "../../LabCard";

const TestPackageCarousel = ({ multiData }) => {
  let slidesToShow = 4;

  const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn slidesToShow={5} />,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width <= 426) {
    slidesToShow = 1;
  } else if (width <= 769) {
    slidesToShow = 3;
  } else {
    slidesToShow = 4;
  }

  return (
    <div style={{ margin: "10px 0" }} className="carousel">
      <Slider {...carouselProperties}>
        {multiData.map((item) => (
          <LabCard key={item.Text} />
        ))}
      </Slider>
    </div>
  );
};

export default TestPackageCarousel;
