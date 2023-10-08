import React,{useState} from "react";
import { Form, Alert } from "react-bootstrap";
import '../../../assets/css/Doctor/inner/filter.css'
import SimpleNav from '../../Home/Nav/simpleNav'
import Footer from '../../Home/innerHome/footer'
const Appointment = () =>{

    return(
        <>
            <div>
                <SimpleNav />
            </div>
            <div>
            <div className='outer'>
                    <div className='inner'>
                        <form  className="form">
                            <div className="form-group">
                                <p>Tell us symptom or health problem</p>
                                <textarea  className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                              <p style={{marginTop:20}}>Choose a releevant speciality</p>  
                            <input type="radio" id="html" name="fav_language" value="HTML" />
                            <label for="css" style={{marginLeft:3}}>Offline</label>
                            <input type="radio" id="css" name="fav_language" value="CSS" />
                            <label for="css">Online</label>
                            
                            </div>
                            <div className="form-group">
                                <p style={{marginTop:20}}>Mobile Number</p>
                                <input className="form-control" type="number" placeholder="Enter number" />
                            </div>
                            
                            <div className='register-btn'>
                                <button type="submit" className='reg-btn'>
                                    Continue
                                </button>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'30px'}}>
                <Footer />
            </div>
        </>
    )
}
export default Appointment