import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Deal1 from '../../../assets/images/inner/med/Deals/innermed-deal1.jpg'
import Deal2 from '../../../assets/images/inner/med/Deals/innermed-deal2.jpg'
import Deal3 from '../../../assets/images/inner/med/Deals/innermed-deal3.jpg'
import Deal4 from '../../../assets/images/inner/med/Deals/innermed-deal4.jpg'
import Deal5 from '../../../assets/images/inner/med/Deals/innermed-deal5.jpg'
import Deal6 from '../../../assets/images/inner/med/Deals/innermed-deal6.jpg'
import Deal7 from '../../../assets/images/inner/med/Deals/innermed-deal7.jpg'
import '../../../assets/css/inner/innerMed.css'
const Deals =() =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
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
      const newArr = [
        {
            "image":Deal1,
            "Text":"Revital",
            "Par":"Mkt:Reliance Retail Limited",
            "Price":"$40",
            "RealPrice" : "$70"
        },
        {
            "image":Deal2,
            "Text":"Biotin",
            "Par":"Mkt:Reliance Retail Limited",
            "Price":"$40",
            "RealPrice" : "$70"
        },
        {
            "image":Deal3,
            "Text":"Omega",
            "Par":"Mkt:Reliance Retail Limited",
            "Price":"$40",
            "RealPrice" : "$70"
        },
        {
            "image":Deal4,
            "Text":"CoqLc",
            "Par":"Mkt:Reliance Retail Limited",
            "Price":"$40",
            "RealPrice" : "$70"
        },
        {
            "image":Deal5,
            "Text":"Nutrition",
            "Par":"Mkt:Reliance Retail Limited",
            "Price":"$40",
            "RealPrice" : "$70"
        },
        {
            "image":Deal6,
            "Text":"Nutrition",
            "Par":"Mkt:Reliance Retail Limited",
            "Price":"$40",
            "RealPrice" : "$70"
        },
        {
            "image":Deal7,
            "Text":"Nutrition",
            "Par":"Mkt:Reliance Retail Limited",
            "Price":"$40",
            "RealPrice" : "$70"
        },
      ]
    return(
        <>
            <div className='innerMed-popular'>
                <p className="lab">Exclusive deals on your daily supplements</p>
            </div>
            <div>      
                <Carousel responsive={responsive}>
                    {
                        newArr.map((item) =>{
                            return(
                                <>
                                   
                                        <img className="slide-img" src={item.image} alt="" />
                                        <p className="nutri">{item.Text}</p>
                                        <p className='deal'><i>{item.Par}</i></p>
                                        <p className='price'><span style={{fontWeight:"bold"}}>Best Price*</span><span style={{fontWeight:'bold',color:'red'}}>{item.Price}</span></p>
                                        <p style={{fontWeight:'bold',fontSize:'11',marginLeft:30,color:'black'}}>MRP:<strike>{item.RealPrice}</strike></p>
                                        <button className='deal-btn'>Add To Cart</button>
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
export default Deals