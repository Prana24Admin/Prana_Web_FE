import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NextBtn, PreviousBtn } from "./CarouselButtons";
import LazyLoadedImage from "../../libs/LazyLoadedImage";
let slidesToShow = 6;

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn slidesToShow={6} />,
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
    slidesToShow = 6;
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
  const navigate = useNavigate();

  return (
    <div className="card-borderContainer" onClick={() => navigate(item.path)}>
      {/* <img className="card-image" src={item.Image} alt="" /> */}
      <LazyLoadedImage
        className={"card-image"}
        src={item.Image}
        alt={"product"}
      />
      {item.Text && <p className="card-title">{item.Text}</p>}
      {item.seeAll && <p className="card-seeAll">{item.seeAll}</p>}
    </div>
  );
};

export default MultiItemCarousel;
