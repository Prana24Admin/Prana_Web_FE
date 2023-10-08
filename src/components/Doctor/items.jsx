import React from 'react'
import Video from '../../assets/images/doctor/items/video.png'
import Near from '../../assets/images/doctor/items/near.jpg'
import Surgery from '../../assets/images/doctor/items/surgery.jpg'
import Lab from '../../assets/images/doctor/items/lab.jpg'
import Medicine from '../../assets/images/doctor/items/medicine.jpg'
import '../../assets/css/Doctor/items.css'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
const DoctorItem = () =>{
    const navigate = useNavigate();
    const navigateVideoConsultant = () => {
        navigate('/inner/doctor/consultant');
      };
      const navigateVideo=() =>{
        navigate('/inner/doctor/consultant')
      }
      const navigateDoctor = () => {
        navigate('/inner/doctor/finddoctor');
      };
      const navigateMedicine = () => {
        navigate('/inner/innerMed');
      };
      const navigateLab = () => {
        navigate('/inner/lab');
      };
    return(
        <>
            <div className='d-flex flex-row justify-content-center prac-row'>
                <div className='d-flex flex-column prac-col col-lg-2' onClick={navigateVideoConsultant}>
                    <img className='prac-img' src={Video} alt="" />
                    <p className='prac-par'> Video Consultation</p>
                    <p className='prac-par1'>connect within 60sec</p>
                </div>
                <div className='d-flex flex-column prac-col col-lg-2' onClick={navigateVideo}>
                    <img className='prac-img' src={Near} alt="" />
                    <p className='prac-par'> Doctors near you</p>
                    <p className='prac-par1'>confirmed appointments</p>
                </div>
                <div className='d-flex flex-column prac-col col-lg-2' onClick={navigateDoctor}>
                    <img className='prac-img' src={Surgery} alt="" />
                    <p className='prac-par'> Surgeries</p>
                    <p className='prac-par1'>Safe and trusted surgery centers</p>
                </div>
                <div className='d-flex flex-column prac-col col-lg-2' onClick={navigateLab}>
                    <img className='prac-img' src={Lab} alt="" />
                    <p className='prac-par'> Lab Tests</p>
                    <p className='prac-par1'>Sample pickup at your home</p>
                </div>
                <div className='d-flex flex-column prac-col col-lg-2' onClick={navigateMedicine}>
                    <img className='prac-img' src={Medicine} alt="" />
                    <p className='prac-par'> Medicines</p>
                    <p className='prac-par1'>Essentials at your door steps</p>
                </div>
            </div>
            
        </>
    )
}
export default DoctorItem