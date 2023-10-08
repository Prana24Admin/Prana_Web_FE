import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BBY from '../../assets/images/health/bby.png'
import NewLaunch from '../../assets/images/health/newLaunch.jpeg'
import Oil from '../../assets/images/health/oil.jpg'
import Prefered from '../../assets/images/health/preferred.png'
import Safety from '../../assets/images/health/Safety.jpg'
import Stock from '../../assets/images/health/stock.jpg'
const HealthSlide = ()=>{
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
            "Image":BBY
        },
        {
            "Image":NewLaunch
        },
        {
            "Image":Oil
        },
        {
            "Image":Prefered
        },
        {
            "Image":Safety
        },
        {
            "Image":Stock
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
export default HealthSlide