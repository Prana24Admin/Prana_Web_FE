import React from 'react'
import Flat from '../../assets/images/offers/flat.jpg'
import Plus from '../../assets/images/offers/plusoffer.jpg'
import Card from 'react-bootstrap/Card';
import '../../assets/css/Offers/offerInnerScreen.css'
const OffersTab = () =>{
    const OfferArr =[
        {
            "Text":"Flat 15% OFF + 5% Cashback + Free Plus Membership",
            "Par":"Coupon applicable on orders above Rs.999.Hurry! Order now.",
            "image":Plus
        },
        {
          "Text":"Flat 25% OFF + 5% Cashback + Free Plus Membership",
          "Par":"Coupon applicable on orders above Rs.999.Hurry! Order now.",
          "image":Plus
      },
      {
        "Text":"Flat 45% OFF + 5% Cashback + Free Plus Membership",
        "Par":"Coupon applicable on orders above Rs.999.Hurry! Order now.",
        "image":Plus
    },
    {
      "Text":"Flat 50% OFF + 5% Cashback + Free Plus Membership",
      "Par":"Coupon applicable on orders above Rs.999.Hurry! Order now.",
      "image":Plus
  }
    ]
    const OfferArr1 =[
        {
            "Text":"Flat 15% OFF + 5% Cashback + Free Plus Membership",
             "Par":"Coupon applicable on orders above Rs.999.Hurry! Order now.",
             "image":Plus
        },
        {
          "Text":"Flat 25% OFF + 5% Cashback + Free Plus Membership",
          "Par":"Coupon applicable on orders above Rs.999.Hurry! Order now.",
          "image":Plus
      },
      {
        "Text":"Flat 45% OFF + 5% Cashback + Free Plus Membership",
        "Par":"Coupon applicable on orders above Rs.999.Hurry! Order now.",
        "image":Plus
    },
    {
      "Text":"Flat 50% OFF + 5% Cashback + Free Plus Membership",
      "Par":"Coupon applicable on orders above Rs.999.Hurry! Order now.",
      "image":Plus
  }
    ]
    
    return(
        <>
            <div className='d-flex flex-row justify-content-center'>
                <div className='d-flex flex-column'>
                {
            OfferArr.map((item) =>{
              return(
                <>
                  <Card className='cardScreen'>
                    <div className="trend-col">
                      <div className='d-flex flex-row'>
                        <div className='d-flex flex-column offer-col1'>
                          <img className='offer-img' src={item.image} />
                        </div>
                        <div className='d-flex flex-column offer-col2 offer-inner-col'>
                          <p>{item.Text}</p>
                        </div>
                      </div>
                      <div className='d-flex flex-column offer-col2 offer-inner-col'>
                        <p className='offer-inner-par'>{item.Par}</p>
                      </div>
                    </div>
                      <hr />
                      <div className='d-flex flex-row col-offer-inner-row'>
                        <div className='d-flex flex-column'>
                          <p className='coupon'>Code:<span className='code'>Take 100</span> </p>
                        </div>
                        <div className='d-flex flex-column'>
                          <p className='copy-code'>Copy Code</p>
                        </div>
                      </div>
                  </Card>
                </> 
              )
            }

            )
          }
          </div>
          <div className='d-flex flex-column'>
                {
            OfferArr1.map((item) =>{
              return(
                <>
                  <Card className='cardScreen'>
                    <div className="trend-col">
                      <div className='d-flex flex-row'>
                        <div className='d-flex flex-column offer-col1'>
                          <img className='offer-img' src={item.image} />
                        </div>
                        <div className='d-flex flex-column offer-col2 offer-inner-col'>
                          <p>{item.Text}</p>
                        </div>
                      </div>
                      <div className='d-flex flex-column offer-col2 offer-inner-col'>
                        <p className='offer-inner-par'>{item.Par}</p>
                      </div>
                    </div>
                      <hr />
                      <div className='d-flex flex-row col-offer-inner-row'>
                        <div className='d-flex flex-column'>
                          <p className='coupon'>Code:<span className='code'>Take 100</span> </p>
                        </div>
                        <div className='d-flex flex-column'>
                          <p className='copy-code'>Copy Code</p>
                        </div>
                      </div>
                  </Card>
                </> 
              )
            }

            )
          }
                </div>
            </div>
        </>
    )
}
export default OffersTab