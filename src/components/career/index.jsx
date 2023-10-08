import React from 'react'
import Header from '../Home/Nav/header'
import Image from '../../assets/images/career/image.jpg'
import '../../assets/css/Career/career.css'
import Footer from '../Home/innerHome/footer'
const Career = () =>{
    return(
        <>
            <div>
                <Header />
            </div>
            <div className='career-body'>
                <div className='career-head'>
                    <p>Prana 24 is digitizing the pharmaceutical supply chain in India. We’re building the <br />biggest medicines/ medical devices wholesaler and pharmacy financing partner starting<br /> in Nigeria. We are backed by some of the most well respected investors in Africa & the U.S.</p>
                </div>
            </div>
            <div className='openings'>
                <div className='d-flex flex-row career-row'>
                    <div className='d-flex flex-column career-col'>
                        <h1>Career Page</h1>
                        <p className='career-row-para'>Raise awareness, drive interest in your company, and build a pipeline of candidates for your open roles.</p>
                        <div className='career-button'>
                            <button className='career-btn'>Contact Sales</button>
                        </div>
                    </div>
                    <div className='d-flex flex-column career-col1'>
                        <img className='career-img' src={Image} alt="" />
                    </div>
                </div>
            </div>
            <div className='career-openings'>
                <p className='career-h1'>Make an unforgettable first impression with a Career Page.</p>
                <p className='career-h4'>Attract top candidates by putting your company culture and job opportunities in the spotlight.</p>
            </div>
            <div className='career-openings-story'>
                <div className='d-flex flex-row story-row'>
                    <div className='d-flex flex-column story-col'>
                        <h5>Share your company's story.</h5>
                        <p>Give candidate’s a snapshot of your culture with videos and photos, employee-created content, testimonials, and tailored messaging.</p>
                    </div>
                    <div className='d-flex flex-column story-col'>
                        <h5>Reach the right candidates.</h5>
                        <p>Create content and job recommendations for targeted audiences. We’ll surface the most relevant opportunities based on their qualifications.</p>
                    </div>
                    <div className='d-flex flex-column story-col'>
                        <h5>Drive applications.</h5>
                        <p>Help candidates assess if they’re a good fit for your role with personalized opportunities and insights.</p>
                    </div>
                </div>
            </div>
            <div className='career-customer'>
                <p className='customer-par'>Learn more about what you can do with Career Pages.</p>
                <div className='career-learn-button'>
                    <button>Contact Sales</button>
                </div>

            </div>
            <div className='career-learn'>
                <div className="d-flex flex-row career-row ">
                    <div className="d-flex flex-column career-row-col1">
                        <p>1.8X</p>
                    </div>
                    <div className="d-flex flex-column career-row-col">
                        <p>Candidates are <span className='career-story-col'> 1.8x more likely </span> to apply for a job if they’re familiar with the company.</p>
                    </div>
                </div> 
            </div>
            <div className='career-customer-learn'>
                <p className='career-customer-par'>See how our customers are using Career Pages.</p>
                <div className='d-flex flex-row career-customer-learn-row'>
                    <div className='d-flex flex-column career-customer-learn-col'>
                        <p className='career-row-para'>Prana 24</p>
                    </div>
                    <div className='d-flex flex-column career-customer-learn-col1'>
                        <p className='career-row-para' >“By leveraging the employee voice [on LinkedIn],<br /> we are able to share a more authentic view of <br /> what it is like to work at Unilever — our values, <br />culture, and what is important to us as an <br />organization.”</p>
                        <button className='career-customer-learn-btn'>Contact Sales</button>
                       
                    </div>
                </div>
            </div>
            <div className='career-ready'>
                <p>Ready to start building your career page</p>
                <div className='career-ready-button'>
                    <button>Contact Sales</button>

                </div>
            </div>
            <div style={{marginTop:'50px'}}>
                <Footer />
            </div>
            
        </>
    )
}
export default Career