import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cour1 from '../../../assets/images/inner/med/sellers/inner-cour1.jpg'
import cour2 from '../../../assets/images/inner/med/sellers/inner-cour2.jpg'
import cour3 from '../../../assets/images/inner/med/sellers/inner-cour3.jpg'
import cour4 from '../../../assets/images/inner/med/sellers/inner-cour4.jpg'
import cour5 from '../../../assets/images/inner/med/sellers/inner-cour5.jpg'
import cour6 from '../../../assets/images/inner/med/sellers/inner-cour6.jpg'
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
            "Image":cour1
        },
        {
            "Image":cour2
        },
        {
            "Image":cour3
        },
        {
            "Image":cour4
        },
        {
            "Image":cour5
        },
        {
            "Image":cour6
        },
      ]
    return(
        <>
            <div className='innerMed-popular'>
                <p className="lab">Best Sellers</p>
            </div>
            <Carousel className="home-labs-img" responsive={responsive}>
                {
                    SlideArr.map((item) =>{
                        return(
                            <>
                                
                                    <img className="sale-img" src={item.Image} alt="" />
                                
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