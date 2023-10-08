import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Saslic from '../../../assets/images/home/trendingNear/saslic.jpg'
import Accu from '../../../assets/images/home/trendingNear/accu.jpg'
import Acne from '../../../assets/images/home/trendingNear/acne.jpg'
import BD from '../../../assets/images/home/trendingNear/bd.jpg'
import BloodGlucose from '../../../assets/images/home/trendingNear/bloodGlucose.jpg'
import Calcium from '../../../assets/images/home/trendingNear/calcium.jpg'
import Drug from '../../../assets/images/home/trendingNear/drug.jpg';
import Ever from '../../../assets/images/home/trendingNear/everHerb.jpg'
import Ipill from '../../../assets/images/home/trendingNear/ipill.jpg'
import Prega from '../../../assets/images/home/trendingNear/prega.jpg'
import Scalp from '../../../assets/images/home/trendingNear/scalpe-copy-0.jpg'
import '../../../assets/css/Home/trendingNear.css'
import { useNavigate } from 'react-router-dom';
const Trending = () =>{
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
      const TrendingArr = [
        {
            "Image":Saslic,
            "Text":"Saslic",
            "cost":"450.00",
            "Rate":"₹418.50"
        },
        {
            "Image":Accu,
            "Text":"Saslic ",
            "cost":"450.00",
            "Rate":"₹418.50"
        },
        {
            "Image":Acne,
            "Text":"Saslic",
            "cost":"450.00",
            "Rate":"₹418.50"
        },
        {
            "Image":BD,
            "Text":"Saslic",
            "cost":"450.00",
            "Rate":"₹418.50"
        },
        {
            "Image":BloodGlucose,
            "Text":"Saslic",
            "cost":"450.00",
            "Rate":"₹418.50"
        },
        {
            "Image":Calcium,
            "Text":"Saslic",
            "cost":"450.00",
            "Rate":"₹418.50"
        },
        {
            "Image":Drug,
            "Text":"Saslic",
            "cost":"450.00",
            "Rate":"₹418.50"
        },
        {
            "Image":Ever,
            "Text":"Saslic",
            "cost":"450.00",
            "Rate":"₹418.50"
        },
        {
            "Image":Ipill,
            "Text":"Saslic",
            "cost":"450.00",
            "Rate":"₹418.50"
        },
        {
            "Image":Prega,
            "Text":"Saslic",
            "cost":"450.00",
            "Rate":"₹418.50"
        },
        {
            "Image":Scalp,
            "Text":"Saslic",
            "cost":"450.00",
            "Rate":"₹418.50"
        }
      ]
    return(
        <>
            <div className="home-labs-img">
                <p className="lab">Trending Near</p>
            </div>
            {/* <Carousel responsive={responsive} className='home-labs-img'> */}
                
                {/* <div>
                    <img  className="trending-img" src={Saslic} alt="" />
                    <p>Saslic Dc foaming face wash 60ml</p>
                    <p>MRP ₹<strike>450.00</strike></p>
                    <p>₹418.50 (7%)</p>
                </div>
                <div>
                    <img  className="trending-img" src={Accu} alt="" />
                    <p>Saslic Dc foaming face wash 60ml</p>
                    <p>MRP ₹<strike>450.00</strike></p>
                    <p>₹418.50 (7%)</p>
                </div>
                <div>
                    <img  className="trending-img" src={Acne} alt="" />
                    <p>Saslic Dc foaming face wash 60ml</p>
                    <p>MRP ₹<strike>450.00</strike></p>
                    <p>₹418.50 (7%)</p>
                </div>
                <div>
                    <img  className="trending-img" src={BD} alt="" />
                    <p>Saslic Dc foaming face wash 60ml</p>
                    <p>MRP ₹<strike>450.00</strike></p>
                    <p>₹418.50 (7%)</p>
                </div>
                <div>
                    <img  className="trending-img" src={BloodGlucose} alt="" />
                    <p>Saslic Dc foaming face wash 60ml</p>
                    <p>MRP ₹<strike>450.00</strike></p>
                    <p>₹418.50 (7%)</p>
                </div>
                <div>
                    <img  className="trending-img" src={Calcium} alt="" />
                    <p>Saslic Dc foaming face wash 60ml</p>
                    <p>MRP ₹<strike>450.00</strike></p>
                    <p>₹418.50 (7%)</p>
                </div>
                <div>
                    <img  className="trending-img" src={Ever} alt="" />
                    <p>Saslic Dc foaming face wash 60ml</p>
                    <p>MRP ₹<strike>450.00</strike></p>
                    <p>₹418.50 (7%)</p>
                </div>
                <div>
                    <img  className="trending-img" src={Drug} alt="" />
                    <p>Saslic Dc foaming face wash 60ml</p>
                    <p>MRP ₹<strike>450.00</strike></p>
                    <p>₹418.50 (7%)</p>
                </div>
                <div>
                    <img  className="trending-img" src={Ipill} alt="" />
                    <p>Saslic Dc foaming face wash 60ml</p>
                    <p>MRP ₹<strike>450.00</strike></p>
                    <p>₹418.50 (7%)</p>
                </div>
                <div>
                    <img  className="trending-img" src={Prega} alt="" />
                    <p>Saslic Dc foaming face wash 60ml</p>
                    <p>MRP ₹<strike>450.00</strike></p>
                    <p>₹418.50 (7%)</p>
                </div>
                <div>
                    <img  className="trending-img" src={Scalp} alt="" />
                    <p>Saslic Dc foaming face wash 60ml</p>
                    <p>MRP ₹<strike>450.00</strike></p>
                    <p>₹418.50 (7%)</p>
                </div> */}
            {/* </Carousel> */}
            <div>      
                    <Carousel responsive={responsive}>
                         {
                            TrendingArr.map((item) =>{
                            return(
                                <>
                                    <div className="trend-col">
                                        <img style={{cursor:'pointer'}} onClick={navigateMedicine} className="trending-img" src={item.Image} alt="" />
                                        <p style={{marginLeft:'40px',fontWeight:'bold'}}>{item.Text}</p>
                                        <p className='item-cost'>MRP  ₹<strike style={{color:'red'}}>{item.cost}</strike></p>
                                        <p className='item-rate'>{item.Rate}(7%)</p>
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
export default Trending