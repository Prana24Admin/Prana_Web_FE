import React,{useState} from 'react'
import Splash from '../../assets/images/splash.jpg'
import axios from 'axios'
import { Form, Alert } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
const Login = () =>{
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    const navigateRegister = () => {
        navigate('/');
      };
    const navigateHome = () => {
        navigate('/home');
      };
      const navigateForgot = () => {
        navigate('/forgot');
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
                        <form  className="form" id="form-login">
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                />
                            </div>

                            <div className="form-group" id="form-pass">
                                <label>Password</label>
                                <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                />
                            </div>
                            <div>
                                <p className='forgot' id="pass-for" onClick={navigateForgot}>Forgot Password?</p>
                            </div>
                            <div className='register-btn'>
                                <button type="submit" className='reg-btn' onClick={navigateHome}>
                                    Login
                                </button>
                            </div>
                            
                            <p className="forgot-password text-center for-par" onClick={navigateRegister}>
                               Create new account{" "}Signup?    
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
export default Login