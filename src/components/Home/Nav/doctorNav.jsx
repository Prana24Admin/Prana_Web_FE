import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/Home/innerNav.css'
import {useNavigate} from 'react-router-dom';
const DoctorNav = () =>{
    const navigate = useNavigate();
    const navigateDoctor = () => {
        navigate('/inner/doctor/finddoctor');
      };
      const navigateVideo=() =>{
        navigate('/inner/doctor/consultant')
      }
      const navigateMedicine = () => {
        navigate('/inner/innerMed');
      };
      const navigateLab = () => {
        navigate('/inner/lab');
      };
      const navigateSurgery = () => {
        navigate('/inner/doctor');
      };
    return(
        <>
        
            <div className='d-flex flex-row inner-nav-row'>
                <div className='d-flex flex-column inner-nav' onClick={navigateDoctor}>
                    <p className='med-row'>Find Doctor</p>
                </div>
                <div className='d-flex flex-column inner-nav' onClick={navigateVideo}>
                    <p className='med-row'>Video Consult</p>
                </div>
                <div className='d-flex flex-column inner-nav' onClick={navigateSurgery}>
                    <p className='med-row'>Surgeries</p>
                </div>
                <div className='d-flex flex-column inner-nav' onClick={navigateMedicine}>
                    <p className='med-row'>Medicine </p>
                </div>
                <div className='d-flex flex-column inner-nav' onClick={navigateLab}>
                    <p className='med-row'>Lab Tests </p>
                </div>
            </div>
           
        </>
    )
}
export default DoctorNav