import React,{useState} from 'react'
import Splash from '../../assets/images/splash.jpg'
import axios from 'axios'
import { Form, Alert } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
const OTP = () =>{
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    
      const navigatePasswordChange = () => {
        navigate('/Password');
      };
    return(
        <>
        <div className='register-screen'>
            <div className='d-flex flex-row col-lg-8'>
                <div className='d-flex flex-column'>
                    <img className='splash-img' src={Splash} alt="" />
                </div>
                <div className='d-flex flex-column col-lg-6'>
                <div className='outer'>
                    <div className='inner'>
                        <h3 className='prana-head'>Prana 24</h3>
                        <form className="form" id="form-login1">
                        <div class="inputfield-otp">
                            <input type="number" maxlength="1" className='otp-in'  />
                            <input type="number" maxlength="1" className='otp-in'/>
                            <input type="number" maxlength="1" className='otp-in'/>
                            <input type="number" maxlength="1" className='otp-in'/>
                        </div>
                        <div>
                            <p className="forgot-password text-center for-par">Haven't received the code?<span className='log-login'>Resend</span></p>
                        </div>
                        <div className='register-btn' >
                            <button type="submit" className='reg-btn' onClick={navigatePasswordChange}>Verify and Proceed</button>
                        </div>
                    </form>      
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default OTP