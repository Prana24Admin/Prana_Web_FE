import React from "react";
import Per from '../../../assets/images/doctor/video/per.jpeg'
import Per1 from '../../../assets/images/doctor/video/per1.jpeg'
import Per2 from '../../../assets/images/doctor/video/per2.jpeg'
import Sofa from '../../../assets/images/doctor/video/sofa.png'
import '../../../assets/css/Doctor/inner/video.css'
import Footer from '../../Home/innerHome/footer'
import {useNavigate} from 'react-router-dom';
const Video =() =>{
    const navigate = useNavigate();
    const navigateAppointment = () => {
        navigate('/inner/doctor/appointment');
      };
    return(
        <>
            <div className='d-flex flex-row video-row'>
                <div className='d-flex flex-column video-col'>
                    <p className='private'>Private Consultation + Audio calls just Rs.199</p>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-column'>
                                <img className='per' src={Per} alt ="" />
                            </div>
                            <div className='d-flex flex-column'>
                                <img className='per' id="per" src={Per1} alt ="" />
                            </div>
                            <div className='d-flex flex-column'>
                                <img className='per' id="per" src={Per2} alt ="" />
                            </div>
                            <div className='d-flex flex-column'>
                                <p className='vid-par'>+ 142 doctors are in online</p>
                            </div>
                        </div>
                    <p onClick={navigateAppointment} className='video-btn'>Consult Now</p>
                </div>
                <div className='d-flex flex-column'>
                    <img className='sofa' src={Sofa} alt="" />
                </div>
                
            </div>
            
        </>
    )
}
export default Video