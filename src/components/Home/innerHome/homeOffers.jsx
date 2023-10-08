import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import Flat from '../../../assets/images/home/flat.jpg'
import Flat150 from '../../../assets/images/home/flat150.jpg'
import PlusOffer from '../../../assets/images/home/plusoffer.jpg'
import Flat1200 from '../../../assets/images/home/flat1200.jpg'
import Live from '../../../assets/images/home/live.jpg'
import Cred from '../../../assets/images/home/cred.jpg'
import Buy from '../../../assets/images/home/buy.png'
import '../../../assets/css/Home/homeOffers.css'
import { useNavigate } from 'react-router-dom';
const HomeOffers = () =>{
    const navigate = useNavigate();
    const navigateOfferScreen = () => {
        navigate('/offers');
      };
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
      const offerArr = [
        {
            "Name": "Flat 15% OFF + Additional Rs100 Off",
            "Image": "Flat",
        },
        {
            "Name": "Flat 15% OFF + 5% Cashback + Free Plus Membership",
            "Image": "Flat150",
        },
        {
            "Name": "Flat 15% OFF + Additional Rs150 OFF",
            "Image": "PlusOffer",
        },
        {
            "Name": "Earn rewards upto Rs2000",
            "Image": "Flat1200",
        },
        
        {
            "Name": "Get upto 250Rs cashback via CRED pay UPI",
            "Image": "Live",
        },
        {
            "Name": "Get Vouchers upto INR 2700 from Ease mytrip",
            "Image": "Cred",
        },
        {
            "Name" :"Buy1 Get1 Free",
            "Image": "Buy",
        }
      ]
    return(
        <>
            <div className='home-inner-offer'>
           
            <div>
                <p className='offers'>Offers just for you</p>
            </div>
            <Carousel className="card-offer-cur" responsive={responsive}>
                <div className='offer-col ' onClick={navigateOfferScreen}>
                    <Card>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-column offer-col1'>
                                <img className='offer-img' src={Flat} alt="medicine" />
                            </div>
                            <div className='d-flex flex-column offer-col2'>
                                <p>Flat 15% OFF + Additional Rs100 Off</p>
                               
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='offer-col' onClick={navigateOfferScreen}>
                    <Card>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-column offer-col1'>
                                <img className='offer-img' src={PlusOffer} alt="medicine" />
                            </div>
                            <div className='d-flex flex-column offer-col2'>
                                <p>Flat 15% OFF + 5% Cashback + Free Plus Membership</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='offer-col' onClick={navigateOfferScreen}>
                    <Card>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-column offer-col1'>
                                <img className='offer-img' src={Flat150} alt="medicine" />
                            </div>
                            <div className='d-flex flex-column offer-col2'>
                                <p>Flat 15% OFF + Additional Rs150 OFF</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='offer-col' onClick={navigateOfferScreen}>
                    <Card>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-column offer-col1'>
                                <img className='offer-img' src={Flat1200} alt="medicine" />
                            </div>
                            <div className='d-flex flex-column offer-col2'>
                                <p>Earn rewards upto Rs2000</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='offer-col' onClick={navigateOfferScreen}>
                    <Card>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-column offer-col1'>
                                <img className='offer-img' src={Cred} alt="medicine" />
                            </div>
                            <div className='d-flex flex-column offer-col2'>
                                <p>Get upto 250Rs cashback via CRED pay UPI</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='offer-col' onClick={navigateOfferScreen}>
                    <Card>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-column offer-col1'>
                                <img className='offer-img' src={Live} alt="medicine" />
                            </div>
                            <div className='d-flex flex-column offer-col2'>
                                <p>Get Vouchers upto INR 2700 from Ease mytrip</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='offer-col' onClick={navigateOfferScreen}>
                    <Card>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-column offer-col1'>
                                <img className='offer-img' src={Buy} alt="medicine" />
                            </div>
                            <div className='d-flex flex-column offer-col2'>
                                <p>Buy1 Get1 Free</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </Carousel>
            {/* <Carousel responsive={responsive}>

                <div className='offer-col'>
                    <Card>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-column offer-col1'>
                                {
                                    offerArr.map((item) =>{
                                        return(
                                            <>
                                                <div className="trend-col">
                                                    <img className="slide-img" src={item.Image} alt="" />
                                                </div>
                                            </> 
                                        )
                                    }

                                )
                                }
                            </div>
                            <div className='d-flex flex-column offer-col2'>
                                {
                                        offerArr.map((item) =>{
                                            return(
                                                <>
                                                    <div className="trend-col">
                                                        <p className="ayur">{item.Name}</p>
                                                    </div>
                                                </> 
                                            )
                                        }

                                    )
                                    }
                            </div>
                        </div>
                    </Card>
                </div>

            </Carousel>
                  */}
            </div>
        </>
    )
}
export default HomeOffers