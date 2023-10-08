import React from 'react'
import Card from 'react-bootstrap/Card';
import '../../assets/css/cart/cart.css'
import Ashwagandha from '../../assets/images/inner/ayurveda/herbs/Ashwagandha.jpg'
import Shilajit from '../../assets/images/inner/ayurveda/herbs/shilajit.jpg'
import Giloy from '../../assets/images/inner/ayurveda/herbs/giloy.jpg'
import Amla from '../../assets/images/inner/ayurveda/herbs/amla.jpg'
import Isabgol from '../../assets/images/inner/ayurveda/herbs/isabgol.jpg'
import Turmeric from '../../assets/images/inner/ayurveda/herbs/turmeric.jpg'
import Honey from '../../assets/images/inner/ayurveda/herbs/honey.jpg'
import Shatavari from '../../assets/images/inner/ayurveda/herbs/shatavari.jpg'
const Cart = () =>{
    const newArr=[
        {
            "Image":Ashwagandha,
            "Title":"Ashwagandha",
            "Quantity":2,
            "Price":"₹399",
            "Address":"1-147,Lotus Enclaves, Hyderabad ",
            "Pincode":"500090"
            
        },
        {
            "Image":Shilajit,
            "Title":"Shilajit",
            "Quantity":2,
            "Price":"₹399",
            "Address":"1-147,Lotus Enclaves, Hyderabad ",
            "Pincode":"500090"
        },
        {
            "Image":Giloy,
            "Title":"Giloy",
            "Quantity":2,
            "Price":"₹399",
            "Address":"1-147,Lotus Enclaves, Hyderabad ",
            "Pincode":"500090"
        },
        {
            "Image":Amla,
            "Title":"Amla",
            "Quantity":2,
            "Price":"₹399",
            "Address":"1-147,Lotus Enclaves, Hyderabad ",
            "Pincode":"500090"
        },
        {
            "Image":Isabgol,
            "Title":"Isabgol",
            "Stock":"Out of stock",
            "Quantity":2,
            "Price":"₹399",
            "Address":"1-147,Lotus Enclaves, Hyderabad ",
            "Pincode":"500090"
        },
        {
            "Image":Turmeric,
            "Title":"Turmeric",
            "Quantity":2,
            "Price":"₹399",
            "Address":"1-147,Lotus Enclaves, Hyderabad ",
            "Pincode":"500090"
        },
        {
            "Image":Honey,
            "Title":"Honey",
            "Quantity":2,
            "Price":"₹399",
            "Address":"1-147,Lotus Enclaves, Hyderabad ",
            "Pincode":"500090"
        },
        {
            "Image":Shatavari,
            "Title":"Shatavari",
            "Quantity":2,
            "Price":"₹399",
            "Address":"1-147,Lotus Enclaves, Hyderabad ",
            "Pincode":"500090"
        },

      ]
    return(
        <>
            <p className='main-head-title'>Items added in your cart :</p>
            {
                        newArr.map((item) =>{
                            return(
                                <>
                                    
                                    <div className='card-card-innercared cart-card'>
                                        <Card className='card-cart-inner'>
                                            <div className='d-flex flex-row'>
                                                <div className='d-flex flex-column'>
                                                    <img className='vitamin-img-healthcare-cart' src={item.Image} alt="" />
                                                    <p className='vitamin-img-healthcare-cart-par'>{item.Stock}</p>
                                                </div>
                                                <div className='d-flex flex-column cart-inner-title-row'>
                                                    <p className='cart-title cart-title-inner'>{item.Title}</p>
                                                    <div className='d-flex flex-row'>
                                                        
                                                        <div className='d-flex flex-column'>
                                                            Quantity:<span className='plus-cart-icon'>+</span>
                                                        </div>
                                                        <div className='d-flex flex-column'>
                                                            <p>{item.Quantity}</p>
                                                        </div>
                                                        <div className='d-flex flex-column'>
                                                            <p></p>
                                                        </div>
                                                    </div>
                                                    {/* <p className=' cart-title-inner1'>Quantity : <span className='plus-cart-icon'>+</span><span>{item.Quantity}</span><span>-</span></p> */}
                                                    <p>Price : {item.Price}</p>
                                                    <p>{item.Address}</p>
                                                    <p>{item.Pincode}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </> 
                            )
                        }

                    )
                }
        </>
    )
}
export default Cart