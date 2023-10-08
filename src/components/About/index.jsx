import React from 'react'
import Header from '../Home/Nav/header'
import '../../assets/css/About/about.css'
import Connect from '../../assets/images/about/connect.png'
import Transparency from '../../assets/images/about/transparency.png'
import Trust from '../../assets/images/about/trust.png'
import AboutInner from './about-inner'
const AboutIndex = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <>
            <div>
                <Header />
            </div>
            <div style={{marginTop:'30px'}}>
                <h2 style={{textAlign:'center'}}>Our Mission</h2>
                <p className='par-txt'>Practo is on a mission to make quality healthcare affordable and accessible for over a billion+ Indians. We believe in empowering our users with the most accurate, comprehensive, and curated information and care, enabling them to make better healthcare decisions.</p>
            </div>
            <div style={{marginTop:'20px'}}>
                <h2 style={{textAlign:'center'}}>Our approach to healthcare </h2>
                <p style={{textAlign:'center'}}>Providing high-quality, trusted, and accessible healthcare is our reason for being</p>
            </div>
            <div className='d-flex flex-row justify-content-center'>
                <div className='d-flex flex-column col-2'>
                    
                </div>
                <div className='d-flex flex-column col-3'>
                  <img className='about-img' src={Connect} alt="" />  
                  <h3 className='connect'>Connect</h3>
                </div>
                <div className='d-flex flex-column col-3'>
                    <img className='about-img' src={Transparency} alt="" /> 
                    <h3 className='transparency'>Transparency</h3>
                </div>
                <div className='d-flex flex-column col-3'>
                    <img className='about-img' src={Trust} alt="" /> 
                    <h3 className='connect'>Trust</h3> 
                </div>
            </div>
            <div className='prana'>
                <h3 className='pra'>What is Prana 24?</h3>
                <p><i><b>Prana24 is a consumer healthcare “super app”.</b></i></p>
                <p className='prana-par'>Prana 24 is a consumer healthcare “super app” that provides consumers with on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, other consumer healthcare products, comprehensive diagnostic test services, and teleconsultations thereby serving their healthcare needs.</p>
            </div>
            <div className='par-mid'>
                <p className='ultimate'>Our ultimate goal is to provide affordable healthcare to one and all.</p>
            </div>
            <div>
                <h3 className='yout'>Get to know us better</h3>
                <div className='youtub'>
                      <iframe style={{marginLeft:'150px'}} width="1000" height="400" src="https://www.youtube.com/embed/Kk-POoUQAoA"></iframe>
                </div>
            </div>
            <div>
                <AboutInner />
            </div>

        </>
    )
}
export default AboutIndex