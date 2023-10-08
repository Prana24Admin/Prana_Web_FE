import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../assets/css/Lab/index.css'
import InnerLab from '../../assets/images/lab/innerlab.jpg'
import InnerLab1 from '../../assets/images/lab/innerLab1.jpg'
import InnerLab2 from '../../assets/images/lab/innerLab2.jpg'
import InnerLab3 from '../../assets/images/lab/innerLab3.jpg'
import InnerLab4 from '../../assets/images/lab/innerLab4.jpg'
const LabSlide = () =>{
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
            "Image":InnerLab
        },
        {
            "Image":InnerLab1
        },
        {
            "Image":InnerLab2
        },
        {
            "Image":InnerLab3
        },
        {
            "Image":InnerLab4
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
export default LabSlide