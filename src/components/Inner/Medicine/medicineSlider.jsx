import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../../assets/css/inner/innerMed.css'
import InnerMed from '../../../assets/images/inner/med/innermed-img.jpg'
import InnerMed1 from '../../../assets/images/inner/med/innermed-img1.png'
import InnerMed2 from '../../../assets/images/inner/med/innermed-img2.jpg'
import InnerMed3 from '../../../assets/images/inner/med/innermed-img3.jpg'
import InnerMed4 from '../../../assets/images/inner/med/innermed-img4.jpg'
import InnerMed5 from '../../../assets/images/inner/med/innermed-img5.jpg'
import InnerMed6 from '../../../assets/images/inner/med/innermed-img6.jpg'
import InnerMed7 from '../../../assets/images/inner/med/innermed-img7.jpg'
const MedicineSlider = () =>{
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
            "Image":InnerMed
        },
        {
            "Image":InnerMed1
        },
        {
            "Image":InnerMed2
        },
        {
            "Image":InnerMed3
        },
        {
            "Image":InnerMed4
        },
        {
            "Image":InnerMed5
        },
        {
            "Image":InnerMed6
        },
        {
            "Image":InnerMed7
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
                                    <img className="innermedicine-img" src={item.Image} alt="" />
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
export default MedicineSlider