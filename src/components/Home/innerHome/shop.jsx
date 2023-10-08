import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AyurvedicCare from '../../../assets/images/home/shop/ayurvedicCare.jpg'
import Durex from '../../../assets/images/home/shop/durex.jpg'
import Evion from '../../../assets/images/home/shop/evion.jpg'
import Harpic from '../../../assets/images/home/shop/harpic.jpg'
import HealthCondition from '../../../assets/images/home/shop/healthCondition.jpg'
import HealthDevices from '../../../assets/images/home/shop/healthDevices.jpg'
import Honey from '../../../assets/images/home/shop/honey.jpg'
import Pampers from '../../../assets/images/home/shop/pampers.jpg'
import PersonalCare from '../../../assets/images/home/shop/personalCare.jpg'
import Protective from '../../../assets/images/home/shop/protectiveMask.jpg'
import Protinex from '../../../assets/images/home/shop/protinex.jpg'
import SkinCare from '../../../assets/images/home/shop/skinCare.jpg'
import Top from '../../../assets/images/home/shop/top.jpg'
import Volini from '../../../assets/images/home/shop/volini.jpg'
import '../../../assets/css/Home/homePaymentOffers.css'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const Shop = () =>{
    const navigate = useNavigate();
    const navigateMedicine = () => {
        navigate('/inner/innerMed');
      };
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
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
      const shopArr = [
        {
            "Name": "Ayurvedic Care",
            "Image": AyurvedicCare   
        },
        {
            "Name": "Sexual Wellness",
            "Image": Durex   
        },
        {
            "Name": "Fitness Supplements",
            "Image": Evion   
        },
        {
            "Name": "Home Care",
            "Image": Harpic  
        },
        {
            "Name": "Health Condition",
            "Image": HealthCondition  
        },
        {
            "Name": "HealthCare Devices",
            "Image": HealthDevices   
        },
        {
            "Name": "Health food and drinks",
            "Image": Honey   
        },
        {
            "Name": "Baby Care",
            "Image": Pampers   
        },
        {
            "Name": "Personal Care",
            "Image": PersonalCare   
        },
        {
            "Name": "Accessories and Wearables",
            "Image": Protective   
        },
        {
            "Name": "Skin Care",
            "Image": SkinCare   
        },
        {
            "Name": "Top Brands",
            "Image": Top   
        },
        {
            "Name": "Diabetic Care",
            "Image": Protinex   
        },

        {
            "Name": "Pain Relief",
            "Image": Volini   
        },
        

    ]
    return(
        <>
            <div className="home-labs-img">
            <div className="lab-container">
                <p className="lab">Shop by category</p>
            </div>
            <Carousel responsive={responsive} onClick={navigateMedicine}>

                
                {/* {
                    shopArr.map((item) =>{
                        return(
                            <>
                                <div>
                                    <img className="slide-img" src={item.Image} alt="" />
                                    <p className="ayur1">{item.Name}</p>
                                </div>
                            </> 
                            )
                        }

                    )
                } */}
                 
                
                <div className='card-row-shop' onClick={navigateMedicine}>
                    <Card className='card-cat'>
                        <img  className="slide-img" id="slide-img" src={AyurvedicCare} alt="" />
                        <p className="ayur1">Ayurvedic Care</p>
                    </Card>
                </div>
                <div className='card-row-shop' onClick={navigateMedicine}>
                    <Card className='card-cat'>
                        <img  className="slide-img" id="slide-img" src={Durex} alt="" />
                        <p className="ayur1">Sexual Wellness</p>
                    </Card>
                </div>
                <div className='card-row-shop' onClick={navigateMedicine}>
                    <Card className='card-cat'>
                    <img  className="slide-img" id="slide-img" src={Evion} alt="" />
                    <p className="ayur1">Fitness Supplements</p>
                    </Card>
                </div>
                <div className='card-row-shop' onClick={navigateMedicine}>
                    <Card className='card-cat'>
                    <img  className="slide-img" id="slide-img" src={Harpic} alt="" />
                    <p className="ayur">Home Care</p>
                    </Card>
                </div>
                <div className='card-row-shop' onClick={navigateMedicine}>
                    <Card className='card-cat'>
                    <img  className="slide-img" id="slide-img" src={HealthCondition} alt="" />
                    <p className="ayur1">Health Condition</p>
                    </Card>
                </div>
                <div className='card-row-shop' onClick={navigateMedicine}>
                    <Card className='card-cat'>
                    <img  className="slide-img" id="slide-img" src={HealthDevices} alt="" />
                    <p className="ayur1">HealthCare Devices</p>
                    </Card>
                </div>
                <div className='card-row-shop' onClick={navigateMedicine}>
                    <Card className='card-cat'>
                    <img  className="slide-img" id="slide-img" src={Honey} alt="" />
                    <p className="ayur1">Health food and drinks</p>
                    </Card>
                </div>
                <div className='card-row-shop' onClick={navigateMedicine}>
                    <Card className='card-cat'>
                    <img  className="slide-img" id="slide-img" src={Pampers} alt="" />
                    <p className="ayur">Baby Care</p>
                    </Card>
                </div>
                <div className='card-row-shop' onClick={navigateMedicine}>
                    <Card className='card-cat'>
                    <img  className="slide-img" id="slide-img" src={PersonalCare} alt="" />
                    <p className="ayur">Personal Care</p>
                    </Card>
                </div>
                <div className='card-row-shop' onClick={navigateMedicine}>
                    <Card className='card-cat'>
                    <img  className="slide-img" id="slide-img" src={Protective} alt="" />
                    <p className="ayur">Accessories</p>
                    </Card>
                </div>
                <div className='card-row-shop' onClick={navigateMedicine}>
                    <Card className='card-cat'>
                    <img  className="slide-img" id="slide-img" src={Protinex} alt="" />
                    <p className="ayur">Diabetic Care</p>
                    </Card>
                </div>
                <div className='card-row-shop' onClick={navigateMedicine}>
                    <Card className='card-cat'>
                    <img  className="slide-img" id="slide-img" src={Top} alt="" />
                    <p className="ayur">Top Brands</p>
                    </Card>
                </div>
                <div className='card-row-shop' onClick={navigateMedicine}>
                    <Card className='card-cat'>
                    <img  className="slide-img" id="slide-img" src={SkinCare} alt="" />
                    <p className="ayur">Skin Care</p>
                    </Card>
                </div>
                <div className='card-row-shop' onClick={navigateMedicine}>
                    <Card className='card-cat'>
                    <img  className="slide-img" id="slide-img" src={Volini} alt="" />
                    <p className="ayur">Pain Relief</p>
                    </Card>
                </div>
            </Carousel>
            </div>
        </>
    )
}
export default Shop