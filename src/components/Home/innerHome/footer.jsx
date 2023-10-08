import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import '../../../assets/css/Home/footer.css'
function footer() {
  return (
    <>
        
            <div className='foot-col'>
             <div className='footer'>
              <div className='sub-row3'>
                <div className='d-flex flex-row sub-inner-row'>
                  <div className='d-flex flex-column'>
                    <h5 style={{color:'#4b4495'}}>Prana 24</h5>
                    <p className='footer-par'>Subscribe To Our News Letter To</p>
                    <p className='footer-par'>Stay up to date</p>
                    <input className='foot-input' type="email" />
                    <div className='foot-btn'>
                      <button className='foot-sub-btn'>Subscribe</button>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    <div>
                      <h5 className='footer-par1' id="footer-par1">Company</h5>
                      <p className='footer-par1-1'>Home</p>
                      <p className='footer-par1-1'>About Us</p>
                      <p className='footer-par1-1'>Contact Us</p>
                      <p className='footer-par1-1'>Careers</p>
                    </div>
                   
                  </div>
                  <div className='d-flex flex-column'>
                    <h5 className='footer-par'>Registration Office</h5>
                    <p className='footer-par1-1'>Ayro Retail Solutions Private Limited<br />
                        Office No. 317, Phii Platinum Square<br /> situated at Viman Nagar,SNO 30/3A3B,<br /> Next to Hyatt, Pune, Maharashtra - 411014 IN</p>
                        <div className='d-flex flex-row '>
                            
                                <div className='d-flex flex-column gap'>
                                    <div><BsInstagram className='col-in' /></div>
                                </div>
                                <div className='d-flex flex-column gap'>
                                    <div><BsFacebook className='col-in'/></div>    
                                </div>
                                <div className='d-flex flex-column gap'>
                                    <div><BsYoutube className='col-in'/></div>    
                                </div>
                                <div className='d-flex flex-column gap'>
                                    <div><BsTwitter className='col-in'/></div>    
                                </div>
                            
                        
                        </div>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <p className='btm-par'>Copyright © 2021 Biddano Pvt Ltd. All Rights Reserved.</p>
              </div>
            </div>
            </div>
        
    </>
  )
}

export default footer