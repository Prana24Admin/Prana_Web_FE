import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Taj from '../../../assets/images/home/cashback.jpg'
import Great from '../../../assets/images/home/cere.jpg'
import Col from '../../../assets/images/home/weekend.jpg'
import '../../../assets/css/Home/homeslide.css'
function HomeSlide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="c-img"
              src={Taj}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="c-img"
              src={Great}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="c-img"
              src={Col}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      
    </>
  );
}
export default HomeSlide
