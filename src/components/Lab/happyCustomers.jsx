import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../assets/css/Lab/index.css'
const HappyLab = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div>
        <div className="cor-img">
            <p className="cor-thou">Thousands of happy customers</p>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>    
                <p className="cor-evry">Good service, Practo is avoiding to stand in que for health checkup.</p>
                <p className="raj">Raja Karri</p>
          </Carousel.Item>
          <Carousel.Item>
           
                
                <p className="cor-evry">Everything went very well and smoothly. Technician was right on time. Really happy with the service.</p>
                <p className="raj">Kiranmayi</p>
         
          </Carousel.Item>
          <Carousel.Item>
          
              
                <p className="cor-evry">"Very professional phlebo. Excellent job in collecting the sample. No pain at all. Got my report also within 24 hours".</p>
                <p className="raj">Raja Kirru</p>
         
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
export default HappyLab
