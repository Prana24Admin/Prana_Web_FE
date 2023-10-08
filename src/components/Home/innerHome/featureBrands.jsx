import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Accusugar from '../../../assets/images/home/featurebrands/accuSugar.png'
import Dettol from '../../../assets/images/home/featurebrands/dettol.png'
import EasyLive from '../../../assets/images/home/featurebrands/easyLive.png'
import EasyPharm from '../../../assets/images/home/featurebrands/easyPharm.jpg'
import Friend from '../../../assets/images/home/featurebrands/Friend.jpg'
import Glucon from '../../../assets/images/home/featurebrands/Glucon.jpg'
import Groviva from '../../../assets/images/home/featurebrands/groviva.jpg'
import Herb from '../../../assets/images/home/featurebrands/herbever.png'
import Huggy from '../../../assets/images/home/featurebrands/huggy.jpg'
import Johnson from '../../../assets/images/home/featurebrands/johnson.jpg'
import Teddy from '../../../assets/images/home/featurebrands/teddy.jpg'
import '../../../assets/css/Home/featureBrand.css'
import { useNavigate } from 'react-router-dom';
const Feature = () =>{
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
      const HomePayArr = [
        {
            "Image":Accusugar,
            "Text":"Accu-Check"
        },
        {
            "Image":Dettol,
            "Text":"Dettol"
        },
        {
            "Image":EasyLive,
            "Text":"LivEasy"
        },
        {
            "Image":EasyPharm,
            "Text":"Pharmeasy"
        },
        {
            "Image":Friend,
            "Text":"Friends"
        },
        {
            "Image":Glucon,
            "Text":"Glucon-D"
        },
        {
            "Image":Groviva,
            "Text":"Groviva"
        },
        {
            "Image":Herb,
            "Text":"Ever Herb"
        },
        {
            "Image":Huggy,
            "Text":"Huggies"
        },
        {
            "Image":Johnson,
            "Text":"Johnson baby"
        },
        {
            "Image":Teddy,
            "Text":"Teddy"
        }
      ]
    return(
        <>
           <div className="home-labs-img">
            <div className="trending">
                <p className="lab">Trending Brands</p>
                <p className="lab-test">Pick from our favourite brands</p>
                <div>      
                    <Carousel responsive={responsive}>
                       
                         {
                            HomePayArr.map((item) =>{
                            return(
                                <>
                                    <div style={{cursor:'pointer'}} className="trend-col" onClick={navigateMedicine}>
                                        <img className="slide-img" src={item.Image} alt="" />
                                        <p style={{marginLeft:'50px'}}>{item.Text}</p>
                                    </div>
                                </> 
                            )
                        }

                    )
                }
                    </Carousel>
                </div>
                </div>
            </div> 
            
        </>
    )
}
export default Feature
