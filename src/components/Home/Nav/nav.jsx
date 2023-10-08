import React from 'react';
import '../../../assets/css/Home/nav.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import {BiCurrentLocation} from 'react-icons/bi'
const Header=() =>{
  const navigate = useNavigate();
  const navigateAbout = () => {
      navigate('/about');
    };
    const navigateRegister = () => {
      navigate('/register');
    };
  
    const navigateContact = () => {
      navigate('/contact');
    };
    const navigateCareer = () => {
      navigate('/career');
    };
    const navigateHome = () => {
      navigate('/home');
    };
    const navigateofferScreen = () => {
      navigate('/offers');
    };
    const navigateCart = () => {
      navigate('/cart');
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
                                <div className="inner-form">
                                    <span className='email'><BiCurrentLocation color="#000"/></span>
                                    <input class="input-field" type="text" placeholder="Panduranga classic, Vasanth Nagar Colony, Hyderabad" />
                                </div> 
                            </div>
                        </div>
                        
                        
                   
                </div>
                <div className='nav'>
                    <ul className='nav_links'>
                        <div className='nav_child'>
                            <div><Link to= "/home"><li onClick={navigateHome}>Home</li></Link></div>
                            <div><Link to= "/about"><li onClick={navigateAbout}><a className='about' href="/about">About Us</a></li></Link></div>
                            <div><Link to= "/contact"><li onClick={navigateContact}><a className='about' href="/contact">Contact Us</a></li></Link></div>
                            <div><Link to= "/career"><li onClick={navigateCareer}><a className='about' href="/career">Career</a></li></Link></div>
                            <div><Link to= "/cart"><li onClick={navigateCart}><a className='about' href="/contact">Cart</a></li></Link></div>
                            <div><Link to= "/offers"><li onClick={navigateofferScreen}><a className='about' href="/contact">Offers</a></li></Link></div>
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