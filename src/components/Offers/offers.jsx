import React from 'react'
import '../../assets/css/Offers/offers.css'
import { Link } from "react-router-dom";
const OfferScreen = () =>{
    
    return(
        <>
            <div style={{marginTop:'20px'}}>
                <p className='pharm'>Pana24 Offers & Coupon Codes</p>
                <p className='prana'>Prana 24 is one of India’s leading online healthcare platforms that allows you to make great savings on your medicines and healthcare needs every day.From finding the prescribed medicine you need to the wellness product that is best suitable for you... </p>
                <p className='prana1'> Download the Prana24 app today to buy medicines online with great savings.Hurry! Avail these exclusive Prana24 offers now.
                </p>
            </div>
            <div className='d-flex flex-row col-row'>
                <div className='d-flex flex-column col-offer'>
                    <Link to= "/offers" > <p className='col-term'>All</p></Link>
                </div>
                <div className='d-flex flex-column col-offer'>
                    <Link to= "/offers/payment"  >  <p className='col-term'>Payments</p></Link>
                </div>
                <div className='d-flex flex-column col-offer'>
                    <Link to= "/offers/medicine"><p className='col-term'>Medicine</p></Link>
                </div>
                <div className='d-flex flex-column col-offer'>
                <Link to= "/offers/diagnostic"  >  <p className='col-term'>Diagnostic</p></Link>
                </div>
                <div className='d-flex flex-column col-offer'>
                <Link to= "/offers/healthCare" > <p className='col-term'>Health Care</p></Link>
                </div>
            </div>
        </>
    )
}
export default OfferScreen