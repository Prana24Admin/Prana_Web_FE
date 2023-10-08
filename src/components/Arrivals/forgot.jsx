import React,{useState} from 'react'
import Splash from '../../assets/images/splash.jpg'
import axios from 'axios'
import { Form, Alert } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
const Forgot = () =>{
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    const navigateOTP = () => {
        navigate('/otp');
      };
      const navigateLogin = () => {
        navigate('/login');
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
                        <form  className="form" id="form-login1">
                            <div className="form-group">
                                <label>Email/Phone</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Enter email/phone"
                                />
                            </div>
                            <div className='register-btn'>
                                <button type="submit" className='reg-btn' onClick={navigateOTP}>
                                    Submit
                                </button>
                            </div>
                            
                            <p className="forgot-password text-center for-par" onClick={navigateLogin}>
                               Login    
                            </p>
                            {flag && (
                                <Alert color="primary" variant="danger">
                                 I got it you are in hurry! But every Field is important!
                                </Alert>
                            )}
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Forgot