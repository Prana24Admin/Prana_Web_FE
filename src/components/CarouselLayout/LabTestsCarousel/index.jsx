import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../carousel.css";
import LabTestCard from "../../LabTestCard";

import { useState } from "react";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NextBtn, PreviousBtn } from "../CarouselButtons";

let slidesToShow = 4;

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn slidesToShow={4} />,
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

const LabTestsCarousel = ({ multiData }) => {
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
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 4;
  }

  return (
    <div style={{ margin: "10px 0" }} className="carousel">
      <Slider {...carouselProperties}>
        {multiData.map((item) => (
          <LabTestCard key={item.uuid} test={item} />
        ))}
      </Slider>
    </div>
  );
};

export default LabTestsCarousel;
