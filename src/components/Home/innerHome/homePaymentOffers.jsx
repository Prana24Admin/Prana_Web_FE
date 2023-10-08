import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Amazon from '../../../assets/images/home/payment/amazonpay.jpg'
import Au from '../../../assets/images/home/payment/au.jpg'
import Hsbc from '../../../assets/images/home/payment/hsbc.jpg'
import Free from '../../../assets/images/home/payment/free.jpg'
import Yes from '../../../assets/images/home/payment/yes.jpg'
import Paytm from '../../../assets/images/home/payment/paytm.jpg'
import Paytmcash from '../../../assets/images/home/payment/paytmcash.jpg'
import Mobik from '../../../assets/images/home/payment/mobik.jpg'
import '../../../assets/css/Home/homePaymentOffers.css';
import { useNavigate } from 'react-router-dom';
const HomePaymentOffers = () =>{
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
      const HomePayArr = [
        {
            "Image":Amazon
        },
        {
            "Image":Au
        },
        {
            "Image":Free
        },
        {
            "Image":Yes
        },
        {
            "Image":Paytm
        },
        {
            "Image":Paytmcash
        },
        {
            "Image":Mobik
        },
      ]
    return(
        <>
            <div className="home-labs-img">
                <div>
                    <p className='offers'>Paymemt Offers</p>
                </div>
                <Carousel responsive={responsive}>
                    {
                        HomePayArr.map((item) =>{
                            return(
                                <>
                                    <div className="pay-col">
                                        <img style={{cursor:'pointer'}} onClick={navigateOfferScreen} className="pay-img" src={item.Image} alt="" />
                                    </div>
                                </> 
                                )
                            }

                        )
                    }
                </Carousel>
            </div>
           
        </>
    )
}
export default HomePaymentOffers