import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HealthSlide from '../../assets/images/blog/healthSlide.jpg'
import HealthSlide1 from '../../assets/images/blog/healthSlide1.jpg'
import HealthSlide2 from '../../assets/images/blog/healthSlide2.jpg'

const BlogSlide =()=>{
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
    const newArr=[
        {
            "Image":HealthSlide
        },
        {
            "Image":HealthSlide1
        },
        {
            "Image":HealthSlide2
        },
        
    ]
    return(
        <>
            <Carousel responsive={responsive}>
                {
                    newArr.map((item) =>{
                        return(
                            <>
                                <div className='innerlab-med'>
                                    <img className="innerLab-img" src={item.Image} alt="" />
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
export default BlogSlide