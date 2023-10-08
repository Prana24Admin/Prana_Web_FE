import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/Home/innerNav.css'
import {useNavigate} from 'react-router-dom';
const InnerNav = () =>{
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
        
            <div className='d-flex flex-row inner-nav-row'>
                <div className='d-flex flex-column inner-nav' >
                    <p onClick={navigateMedicine} className='med-row'>Medicine</p>
                </div>
                <div className='d-flex flex-column inner-nav'>
                    <p onClick={navigateLab} className='med-row'>Lab Tests</p>
                </div>
                <div className='d-flex flex-column inner-nav'>
                    <p onClick={navigateHealthCare} className='med-row'>Health Care</p>
                </div>
                <div className='d-flex flex-column inner-nav'>
                    <p onClick={navigateHealthBlog} className='med-row'>Health Blogs</p>
                </div>
                
                <div className='d-flex flex-column inner-nav'>
                    <p onClick={navigateDoctor} className='med-row'>Doctor</p>
                </div>
                <div className='d-flex flex-column inner-nav'>
                    <p onClick={navigateAyurveda} className='med-row'>Ayurveda</p>
                </div>
                <div className='d-flex flex-column inner-nav'>
                    <p onClick={navigateOfferScreen} className='med-row'>Offers</p>
                </div>
               
            </div>
           
        </>
    )
}
export default InnerNav