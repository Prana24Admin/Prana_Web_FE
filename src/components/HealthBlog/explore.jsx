import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ExploreSlide from '../../assets/images/blog/category/category.jpg'
import ExploreSlide1 from '../../assets/images/blog/category/category1.jpg'
import ExploreSlide2 from '../../assets/images/blog/category/category2.jpg'
import ExploreSlide3 from '../../assets/images/blog/category/category3.jpg'
import ExploreSlide4 from '../../assets/images/blog/category/category4.jpg'
const Explore =()=>{
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
    const newArr=[
        {
            "Image":ExploreSlide
        },
        {
            "Image":ExploreSlide1
        },
        {
            "Image":ExploreSlide2
        },
        {
            "Image":ExploreSlide3
        },
        {
            "Image":ExploreSlide4
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
                                    <img src={item.Image} alt="" />
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
export default Explore