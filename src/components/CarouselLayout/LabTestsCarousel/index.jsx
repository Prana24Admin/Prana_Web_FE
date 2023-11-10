// Importing the Slider component and its styles from the react-slick library
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../carousel.css";

import LabTestCard from "../../LabTestCard";
import { useState, useEffect } from "react";
import { NextBtn, PreviousBtn } from "../CarouselButtons";

// Initial value for the number of slides to show
let slidesToShow = 4;

// Properties for configuring the Slider component
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
  // State to track the window width for responsive design
  const [width, setWidth] = useState(window.innerWidth);

  // Function to update the window width on resize
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  // Effect hook to add and remove the resize event listener
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Adjusting the number of slides to show based on the window width
  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 4;
  }

  // JSX structure for rendering the Lab Tests Carousel
  return (
    <div style={{ margin: "0px 0rem" }} className="carousel">
      {/* Slider component with configured properties */}
      <Slider {...carouselProperties}>
        {/* Mapping LabTestCard components for each data item */}
        {multiData.map((item) => (
          <LabTestCard key={item.uuid} test={item} />
        ))}
      </Slider>
    </div>
  );
};

export default LabTestsCarousel;
