import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../../assets/css/inner/ayurveda/index.css'
import Slide1 from '../../../assets/images/inner/ayurveda/slide1.jpg'
import Slide2 from '../../../assets/images/inner/ayurveda/slide2.jpg'
import Slide3 from '../../../assets/images/inner/ayurveda/slide3.jpg'
import Slide4 from '../../../assets/images/inner/ayurveda/slide4.jpg'
const AyurSlide = () =>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
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
            "Image":Slide1
        },
        {
            "Image":Slide2
        },
        {
            "Image":Slide3
        },
        {
            "Image":Slide4
        },
       
      ]
    return(
        <>
            <Carousel responsive={responsive}>
                {
                    SlideArr.map((item) =>{
                        return(
                            <>
                                <div className='innermed'>
                                    <img className="ayur-img" src={item.Image} alt="" />
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
export default AyurSlide