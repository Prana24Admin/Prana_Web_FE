import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../../assets/css/inner/ayurveda/index.css'
const AyurvedaOffers = () =>{
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return(
        <>
            <div className='ayur-slide'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <p className='cour-par' id="cour-par">10% off on first order above Rs1500. Use code Prana24-10</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p className='cour-par' id="cour-par">25% off on first three orders above Rs5000. Use code Prana24-25</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p className='cour-par' id="cour-par">Free delivery on first order above Rs800. Use code Prana24-Free</p>
                    </Carousel.Item>
                </Carousel>
            </div>
            
        </>
    )
}
export default AyurvedaOffers