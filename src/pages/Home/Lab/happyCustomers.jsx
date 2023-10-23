import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../../assets/css/Lab/index.css";
const HappyLab = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="cor-img">
          <p className="cor-thou">Thousands of happy customers</p>
        </div>
        <Carousel responsive={responsive} renderDotsOutside={true}>
          <Carousel.Item>
            <p className="cor-evry">
              Good service, Practo is avoiding to stand in que for health
              checkup.
            </p>
            <p className="raj">Raja Karri</p>
          </Carousel.Item>
          <Carousel.Item>
            <p className="cor-evry">
              Everything went very well and smoothly. Technician was right on
              time. Really happy with the service.
            </p>
            <p className="raj">Anudeep Reddy</p>
          </Carousel.Item>
          <Carousel.Item>
            <p className="cor-evry">
              "Very professional phlebo. Excellent job in collecting the sample.
              No pain at all. Got my report also within 24 hours".
            </p>
            <p className="raj">Raja Goud</p>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
export default HappyLab;
