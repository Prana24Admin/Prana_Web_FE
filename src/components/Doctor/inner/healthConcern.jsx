import React from "react";
import Carousel from 'react-multi-carousel';
import Card from 'react-bootstrap/Card';
import 'react-multi-carousel/lib/styles.css';
import Cough from '../../../assets/images/doctor/health/cough.jpg'
import Periods from '../../../assets/images/doctor/health/period.jpg'
import Performance from '../../../assets/images/doctor/health/performance_issue.jpg'
import SkinProblems from '../../../assets/images/doctor/health/skin-problems.jpg'
import Depression from '../../../assets/images/doctor/health/depression.jpg'
import LoseWeight from '../../../assets/images/doctor/health/lose-weight.jpg'
import Stomache from '../../../assets/images/doctor/health/stomach.jpg'
import Vaginal from'../../../assets/images/doctor/health/vaginal-infections.jpg'
import Sick from '../../../assets/images/doctor/health/sick-kid.jpg'
import { useNavigate } from "react-router-dom";
const HealthConcern =() =>{
    const navigate=useNavigate();
    const navigateAppointment =()=>{
        navigate('/inner/doctor/appointment')
    }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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
            "Image":Cough,
            "Title":"Cough",
            "Price":"₹499"
        },
        {
            "Image":Periods,
            "Title":"Periods",
            "Price":"₹399"
        },
        {
            "Image":Performance,
            "Title":"Performance",
            "Price":"₹599"
        },
        {
            "Image":SkinProblems,
            "Title":"SkinProblems",
            "Price":"₹499"
        },
        {
            "Image":Depression,
            "Title":"Depression",
            "Price":"₹399"
        },
        {
            "Image":LoseWeight,
            "Title":"LoseWeight",
            "Price":"₹499"
        },
        {
            "Image":Stomache,
            "Title":"Stomache",
            "Price":"₹499"
        },
        {
            "Image":Vaginal,
            "Title":"Vaginal",
            "Price":"₹599"
        },
        {
            "Image":Sick,
            "Title":"Sick",
            "Price":"₹399"
        },

      ]
    return(
        <>
            <div className='innerHealth-Blog'>
                <p className='innerHealthBlog-par'>Common Health Concerns</p>
                <p style={{lineHeight:0.7}}>Consult a doctor in online for any health issue </p>
            </div>
            <div style={{marginTop:40}}>
                <Carousel responsive={responsive}>
                        {
                            newArr.map((item) =>{
                                return(
                                    <>
                                        <div className='card-card-innercared'>
                                            <Card className='card-img-health-care' id="card-health">
                                                <img className='vitamin-img-healthcare' src={item.Image} alt="" />
                                                <p className='world-par'>{item.Title}</p>
                                                <p style={{textAlign:'center',fontWeight:'bold'}}>Consultation Fee : <span style={{color:'red'}}>{item.Price}</span></p>
                                                <button onClick={navigateAppointment} className="btn-doctor-video">Consult Now</button>
                                            </Card>
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
export default HealthConcern