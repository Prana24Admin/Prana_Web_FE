import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LungCare from '../../../assets/images/inner/med/health/lung-care.jpg'
import Diabetes from '../../../assets/images/inner/med/health/diabetic-care.jpg'
import WomenCare from '../../../assets/images/inner/med/health/women-s-care.jpg'
import WeightCare from '../../../assets/images/inner/med/health/weight-care.jpg'
import boneJoint from '../../../assets/images/inner/med/health/bone-and-joint-pain.jpg'
import deAdd from '../../../assets/images/inner/med/health/de-addiction.jpg'
const Health = ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
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
      const newArr = [
        {
            "image":LungCare,
            "Text":"Lung Care"
        },
        {
            "image":Diabetes,
            "Text":"Diabetes"
        },
        {
            "image":WomenCare,
            "Text":"Women Care"
        },
        {
            "image":WeightCare,
            "Text":"Weight Care"
        },
        {
            "image":boneJoint,
            "Text":"Bone Joint"
        },
        {
            "image":deAdd,
            "Text":"Deaddiction"
        },
      ]
    return(
        <>
            <div className='innerMed-popular'>
                <p className="lab">Health Concerns</p>
            </div>
            <div>      
                <Carousel responsive={responsive}>
                    {
                        newArr.map((item) =>{
                            return(
                                <>
                                   
                                        <img className="health-inner-img" src={item.image} alt="" />
                                        <p className="nutri">{item.Text}</p>

                                </> 
                            )
                        }

                    )
                }
                    </Carousel>
            </div>
        </>
    )
}
export default Health