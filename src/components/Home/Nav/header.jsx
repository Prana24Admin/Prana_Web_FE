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
                                <p className='par-nav'>Prana 24 | Pincode </p>
                            </div>
                            <div className='d-flex flex-column'>
                                
                            </div>
                        </div>
                        
                        
                   
                </div>
                <div className='nav'>
                    <ul className='nav_links'>
                        <div className='nav_child'>
                            <div><Link to= "/home"><li>Home</li></Link></div>
                            <div><Link to= "/about"><li><a className='about' href="/about">About Us</a></li></Link></div>
                            <div><Link to= "/contact"><li><a className='about' href="/contact">Contact Us</a></li></Link></div>
                            <div><Link to= "/career"><li><a className='about' href="/career">Career</a></li></Link></div>
                            <div><Link to= "/cart"><li><a className='about' href="/cart">Cart</a></li></Link></div>
                            <div><Link to= "/offers"><li><a className='about' href="/contact">Offers</a></li></Link></div>
                            <div><li><FloatingWhatsApp /></li></div>
                            <div><li><button className='download'>Download App</button></li></div>

                        </div>
                    </ul>
                </div>
            </div>

        </div>
           
        </>
    )
}
export default Header