import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../assets/css/Lab/index.css'
import Skin from '../../assets/images/lab/body/Skin.jpg'
import Bone from '../../assets/images/lab/body/Bones.jpg'
import Cancer from '../../assets/images/lab/body/Cancer.jpg'
import Diabetes from '../../assets/images/lab/body/Diabetes.jpg'
import Digestion from '../../assets/images/lab/body/digestion.jpg'
import Fever from '../../assets/images/lab/body/Fever.jpg'
import Kidney from '../../assets/images/lab/body/Kidney.jpg'
const LabHealth = () =>{
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
      const newArr=[
        {
            "Image":Skin,
            "Text":"Skin"
            
        },
        {
            "Image":Bone,
            "Text":"Bone"
        },
        {
            "Image":Cancer,
            "Text":"Cancer"
        },
        {
            "Image":Diabetes,
            "Text":"Diabetes"
        },
        {
            "Image":Digestion,
            "Text":"Digestion"
        },
        {
            "Image":Fever,
            "Text":"Fever"
        },
        {
            "Image":Kidney,
            "Text":"Kidney"
        },

    ]
    return(
        <>
             <div>
                <p className='testby-par'>Find tests by health concern</p>
            </div>
            <div>
            <Carousel responsive={responsive}>
                {
                    newArr.map((item) =>{
                        return(
                            <>
                                <div className='offer-col1'>
                                    <img className='testby' src={item.Image} alt="" />
                                    <p className='testbyimg-par'>{item.Text}</p>
                                </div> 
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
export default LabHealth