import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

import { useState } from "react";
import { useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductItem from "../ProductItem";
let slidesToShow = 5;

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

const ProductCarousel = ({ multiData }) => {
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
  const navigate = useNavigate();

  return (
    // <div
    //   className="productCard-borderContainer"
    //   onClick={() => navigate(item.path)}
    // >
    //   <img className="card-image" src={item.Image} alt="" />
    //   {item.Text && <p className="card-title">{item.Text}</p>}
    //   <p className="productCard-Mrp">
    //     MRP:{item.Price}
    //     <span>{item.RealPrice}</span>
    //   </p>
    //   {<button className="productCard-selectButton">Add to cart</button>}
    //   {item.seeAll && <p className="card-seeAll">{item.seeAll}</p>}
    // </div>
    <div style={{ margin: "0.3rem 0.5rem" }}>
      <ProductItem product={item} />
      {item.seeAll && <p className="card-seeAll">{item.seeAll}</p>}
    </div>
  );
};

export default ProductCarousel;
