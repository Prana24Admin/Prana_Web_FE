import React from 'react';
import '../../../assets/css/Home/nav.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {BiCurrentLocation} from 'react-icons/bi'
const Header=() =>{
  const navigate = useNavigate();
//   const navigateAbout = () => {
//       navigate('/about');
//     };
//     const navigateRegister = () => {
//       navigate('/register');
//     };
  
//     const navigateContact = () => {
//       navigate('/contact');
//     };
//     const navigateCareer = () => {
//       navigate('/career');
//     };
//     const navigateHome = () => {
//       navigate('/');
//     };
//     const navigateofferScreen = () => {
//       navigate('/offerScreen');
//     };
const navigateofferScreen = () => {
    navigate('/offers');
  };
    
    return (
        <>
        <div className='body'>
            <div className='header'>
                <div className='logo'>
                      
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-column'>
                                <p className='par-nav'>Prana 24  </p>
                            </div>
                            
                        </div>
                        
                        
                   
                </div>
            </div>

        </div>
           
        </>
    )
}
export default Header