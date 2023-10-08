import React from 'react'
import Card from 'react-bootstrap/Card';
import '../../../assets/css/Home/homeCard.css'
import Med from '../../../assets/images/home/med.jpg'
import Beauty from '../../../assets/images/home/Beautynew.jpg'
import Well from '../../../assets/images/home/well.jpg'
import {useNavigate} from 'react-router-dom';
const HomeCard = () =>{
    const navigate = useNavigate();
    const navigateMedicine = () => {
        navigate('/inner/innerMed');
      };
      const navigateAyurveda = () => {
        navigate('/inner/innerAyur');
      };
    //   const navigateFindDoctor = () =>{
    //     navigate('/findDoctor');
    //   }
    return(
        <>  <div className='card-con'>
                <div className='d-flex flex-row card-container'>
                    <div className='d-flex flex-column col-lg-3'>
                        <Card className='card-card' onClick={navigateMedicine}>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-column'>
                                    <img className='medicine' src={Med} alt="medicine" />
                                </div> 
                                <div className='d-flex flex-column card-col'>
                                    <p className='car-par'>Order Medicine</p>
                                    <p className='card-par1'>Save upto 25% OFF</p>
                                </div>
                                <div className='d-flex flex-column card-col'>
                                    <p className="card-char"> > </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='d-flex flex-column col-lg-3'>
                        <Card className='card-card' onClick={navigateAyurveda}>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-column'>
                                    <img className='medicine' src={Beauty} alt="medicine" />
                                </div> 
                                <div className='d-flex flex-column card-col'>
                                    <p className='car-par'>Ayurveda</p>
                                    <p className='card-par1'>Save upto 40% OFF</p>
                                </div>
                                <div className='d-flex flex-column card-col'>
                                    <p className="card-char"> > </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='d-flex flex-column col-lg-3'>
                        <Card className='card-card' onClick={navigateMedicine}>
                            <div className='d-flex flex-row'>
                                <div className='d-flex flex-column'>
                                    <img className='medicine' src={Well} alt="medicine" />
                                </div> 
                                <div className='d-flex flex-column card-col'>
                                    <p className='car-par'>Wellness</p>
                                    <p className='card-par1'> Upto 80% OFF</p>
                                </div>
                                <div className='d-flex flex-column card-col'>
                                    <p className="card-char"> > </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div> 
            </div>
           
           
        </>
    )
}
export default HomeCard