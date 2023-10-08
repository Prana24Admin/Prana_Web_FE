import React from 'react'
import Petcare from '../../../assets/images/home/Arrivals/petcare.jpg'
import Vitamin from '../../../assets/images/home/Arrivals/vitamin.jpg'
import Ortho from '../../../assets/images/home/Arrivals/orthopaedics.jpg'
import Measurements from '../../../assets/images/home/Arrivals/measurements.jpg'
import Dilutions from '../../../assets/images/home/Arrivals/dilutions.jpg'
import Carousel from 'react-multi-carousel';
import HomeoDrops from '../../../assets/images/home/Arrivals/homeopathic_drops.jpg'
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom'
const NewArrivals = () =>{
    const navigate = useNavigate();
    const navigateMedicine = () => {
        navigate('/inner/innerMed');
      };
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
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
            "image":Petcare,
            "Text":"Petcare"
        },
        {
            "image":Vitamin,
            "Text":"Vitamin"
        },
        {
            "image":Ortho,
            "Text":"orthopaedics"
        },
        {
            "image":Measurements,
            "Text":"Measurements"
        },
        {
            "image":Dilutions,
            "Text":"Dilutions"
        },
        {
            "image":HomeoDrops,
            "Text":"Homeo Drops"
        }
      ]
    return(
        <>
             <div className="home-labs-img">
                <p className="lab">New Arrivals</p>
            </div>
            <div>      
                <Carousel responsive={responsive}>
                    {
                        newArr.map((item) =>{
                            return(
                                <>
                                    <div className="trend-col">
                                        <img style={{cursor:'pointer'}} onClick={navigateMedicine} className="slide-img" src={item.image} alt="" />
                                        <p className="ayur">{item.Text}</p>
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
export default NewArrivals