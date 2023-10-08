import React,{useEffect,useState} from 'react'
import Splash from '../../assets/images/splash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/css/register.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
const Register = () =>{
    const navigate = useNavigate();
    const navigateLogin = () => {
      navigate('/login');
    };
    const navigateHome = () => {
        navigate('/home');
      };
    
    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[password,setPassword] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
    async function signUp(){
        let item={firstName,lastName,password,email,phone}
         console.log(item)
         axios.post('https://api-prana.prana24.in/api/auth/admin/signup',{
            email:email,
            first_name:firstName,
            last_name:lastName,
            phone_number:phone,
            password:password
         }).then(result=>{
            console.log(result)
         }).catch(error =>{
            console.log(error)
         })
        // let result = await fetch('https://api-prana.prana24.in/api/auth/admin/signup',{
        //     method:'POST',
        //     body:JSON.stringify(item),
        //     headers:{
        //         "Content-Type" : 'application/json',
        //         "Accept" : 'application/json'
        //     }
        // })
        // result = await result.json()
        // console.log("result",result)
//         var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "first_name": "J",
//   "last_name": "K",
//   "email": "grandhi.saikiranmayi@gmail.com",
//   "password": "password",
//   "phone_ext": "+91",
//   "phone_number": "9100394566"
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("https://api-prana.prana24.in/api/auth/admin/signup", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
     }
    return(
        <div className='register-screen'>
            <div className='d-flex flex-row col-lg-8'>
                <div className='d-flex flex-column'>
                    <img className='splash-img' src={Splash} alt="" />
                </div>
                <div className='d-flex flex-column col-lg-6'>
                    <div className='outer'>
                        <div className='inner'>
                            <h3 className='prana-head'>Prana 24</h3>
                            <form  className="form">
                                <div className="form-group form-field">
                                    <label>First Name</label>
                                    <input type="text" className="form-control" placeholder="Enter First Name" name="first_name" value={firstName} onChange={(e) =>setFirstName(e.target.value)} />
                                </div>
                                <div className="form-group form-field">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Last Name" name="last_name" value={lastName} onChange={(e) =>setLastName(e.target.value)} />
                                </div>
                                <div className="form-group form-field">
                                    <label>Email</label>
                                    <input type="email" className="form-control"  placeholder="Enter email" value={email} onChange={(e) =>setEmail(e.target.value)}/>   
                                </div>
                                <div className="form-group form-field">
                                    <label>Phone No.</label>
                                    <input type="Phone" className="form-control" placeholder="Enter contact no" value={phone} onChange={(e) =>setPhone(e.target.value)} />
                                </div>
                                <div className="form-group form-field">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" value={password}  onChange={(e) =>setPassword(e.target.value)}/>     
                                </div>
                                <div className='register-btn form-field'>
                                    <button type="button" className='reg-btn' onClick={navigateHome}>
                                        Register
                                    </button>
                                </div>
                                <p className="forgot-password text-center for-par" onClick={navigateLogin}>
                                    Already registered{"  "} <span className='log-login' >Login</span>    
                                </p>   
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register