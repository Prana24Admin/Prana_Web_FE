import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
// import { data, multiData } from "./data";

import { useState } from "react";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
let slidesToShow = 5;

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ChevronLeft style={{ color: "blue", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  console.log(props);
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ChevronRight style={{ color: "blue", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
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

const MultiItemCarousel = ({ multiData }) => {
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
    slidesToShow = 5;
  }

  return (
    <div style={{ margin: "10px 0" }} className="carousel">
      <Slider {...carouselProperties}>
        {multiData.map((item) => (
          <CarouselCard item={item} />
        ))}
      </Slider>
    </div>
  );
};

const CarouselCard = ({ item }) => {
  return (
    <div
      className="card-borderContainer"
      // style={{
      //   textAlign: "center",
      //   margin: "0rem 0.5rem",
      //   borderWidth: 1,
      //   borderColor: "black",
      // }}
    >
      <img
        className="card-image"
        src={item.Image}
        alt=""

        // style={{
        //   width: "100%",
        //   height: "170px",
        //   objectFit: "contain",
        //   marginBottom: "10px",
        // }}
      />
      <p className="card-title">{item.Text}</p>
    </div>
  );
};

export default MultiItemCarousel;
