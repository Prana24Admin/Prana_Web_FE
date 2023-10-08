import React from 'react'
import Flat15 from '../../../assets/images/home/flat15.jpg'
import LabTest from '../../../assets/images/home/labTest.jpg'
import Liveasy from '../../../assets/images/home/liveasy.jpg'
import Pharm from '../../../assets/images/home/pharm.jpg'
import Ixigo from '../../../assets/images/home/ixigo.jpg';
import Toothsi from '../../../assets/images/home/toothsi.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../../assets/css/Home/slider.css'
const Slider =()=>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const SlideArr = [
        {
            "Image":Flat15
        },
        {
            "Image":LabTest
        },
        {
            "Image":Liveasy
        },
        {
            "Image":Pharm
        },
        {
            "Image":Ixigo
        },
        {
            "Image":Toothsi
        },
      ]
    return(
        <>
            <Carousel className="home-labs-img" responsive={responsive}>
                {
                    SlideArr.map((item) =>{
                        return(
                            <>
                                <div className="sale-col">
                                    <img className="sale-img" src={item.Image} alt="" />
                                </div>
                            </> 
                            )
                        }

                    )
                }
                
            </Carousel>
        </>
    )
}
export default Slider