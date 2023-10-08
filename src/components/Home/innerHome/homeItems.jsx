import React from 'react'
import Med from '../../../assets/images/home/medicine.jpg'
import Lab from '../../../assets/images/home/lab.jpg'
import HealthCare from '../../../assets/images/home/healthcare.jpg'
import Doctor from '../../../assets/images/home/doctor.jpg'
import Health from '../../../assets/images/home/health.jpg'
import Plus from '../../../assets/images/home/plus.jpg'
import Offers from '../../../assets/images/home/offers.jpg'
import Value from '../../../assets/images/home/value.png'
import '../../../assets/css/Home/homeItems.css'
import {useNavigate} from 'react-router-dom';
const HomeItems = () =>{
    const navigate = useNavigate();
      const navigateDoctor = () => {
        navigate('/inner/doctor');
      };
      const navigateMedicine = () => {
        navigate('/inner/innerMed');
      };
      const navigateLab = () => {
        navigate('/inner/lab');
      };
      const navigateHealthCare = () => {
        navigate('/inner/healthCare');
      };
      const navigateHealthBlog = () => {
        navigate('/inner/healthBlog');
      };
      const navigateOfferScreen = () => {
        navigate('/offers');
      };
      const navigateAyurveda = () => {
        navigate('/inner/innerAyur');
      };
    return(
        <>
            <div className='items'>
                <div className='d-flex flex-row item-row'>
                    <div className='d-flex flex-column item-col' onClick={navigateDoctor} >
                        <img className='medicine-item' src={Doctor} alt="" />
                        <p className='med-item'>Doctor</p> 
                    </div>
                    <div className='d-flex flex-column item-col' onClick={navigateMedicine} >
                        <img className='medicine-item' src={Med} alt="" />
                        <p className='med-item'>Medicine</p>
                        <p className='med-item1'>Flat 15% OFF</p>
                    </div>
                    <div className='d-flex flex-column item-col' onClick={navigateLab}>
                        <img className='medicine-item' src={Lab} alt="" />
                        <p className='med-item'>Lab Tests</p>
                        <p className='med-item1'>Upto 70% OFF</p>
                    </div>
                    <div className='d-flex flex-column item-col' onClick={navigateHealthCare}>
                        <img className='medicine-item' src={HealthCare} alt="" />
                        <p className='med-item'>Health Care</p>
                        <p className='med-item1'>Upto 60% OFF</p>
                    </div>
                    <div className='d-flex flex-column item-col' onClick={navigateDoctor}>
                        <img className='medicine-item' src={Doctor} alt="" />
                        <p className='med-item'>Surgeries</p>   
                    </div>
                    <div className='d-flex flex-column item-col' onClick={navigateHealthBlog}>
                        <img className='medicine-item' src={Health} alt="" />
                        <p className='med-item'>Health Blogs</p>
                    </div>
                    <div className='d-flex flex-column item-col' onClick={navigateOfferScreen}>
                        <img className='medicine-item' src={Plus} alt="" />
                        <p className='med-item'>Plus</p>
                        <p className='med-item1'>Save 5% Extra</p>
                    </div>
                    <div className='d-flex flex-column item-col' onClick={navigateOfferScreen}>
                        <img className='medicine-item' src={Offers} alt="" />
                        <p className='med-item'>Offers</p>
                        
                    </div>
                    <div className='d-flex flex-column item-col' onClick={navigateAyurveda}>
                        <img className='medicine-item' src={Value} alt="" />
                        <p className='med-item'>Ayurveda</p>
                    </div>
                </div>
                
                
            </div>
        </>
    )
}
export default HomeItems