import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
// import { data, multiData } from "./data";

import { useState } from "react";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
let slidesToShow = 1;

const PreviousBtn = (props) => {
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
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
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
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const MainBannerCarousel = ({ multiData }) => {
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
    slidesToShow = 1;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 1;
  } else {
    slidesToShow = 1;
  }

  return (
    <div style={{ margin: "10px 0" }} className="carousel">
      <Slider {...carouselProperties}>
        {multiData.map((item) => (
          <CarouselCard item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};

const CarouselCard = ({ item }) => {
  return (
    <div>
      <img
        // className="banner-image"
        style={{
          width: "99%",
          height: "17rem",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        src={item.Image}
        alt="banner"
      />
    </div>
  );
};

export default MainBannerCarousel;
