import React,{useState} from 'react'
import Splash from '../../assets/images/splash.jpg'
import axios from 'axios'
import { Form, Alert } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
const Login = () =>{
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
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
                        <form  className="form" id="form-login">
                            <div className="form-group">
                                <label>New Password</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="New Password"
                                />
                            </div>

                            <div className="form-group" id="form-pass">
                                <label>Confirm Password</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Confirm Password"
                                />
                            </div>
                            <div className='register-btn'>
                                <button type="submit" className='reg-btn' onClick={navigateLogin}>
                                    Submit
                                </button>
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
export default Login