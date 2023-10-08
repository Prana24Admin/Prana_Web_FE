import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../../assets/css/Home/homePaymentOffers.css'
import Healthy from '../../../assets/images/home/trending/healthy.jpg'
import Acuve from '../../../assets/images/home/trending/acuvue.jpg'
import Ayurved from '../../../assets/images/home/trending/ayurveda.jpg'
import Grow from '../../../assets/images/home/trending/grovivo.jpg'
import Luci from '../../../assets/images/home/trending/luci.jpg'
import Mendwell from '../../../assets/images/home/trending/mendwell.jpg'
import Morepen from '../../../assets/images/home/trending/morepen.jpg'
import Relispray from '../../../assets/images/home/trending/relispray.jpg'
import Satthwa from '../../../assets/images/home/trending/satthwa.jpg'
import Homeo from '../../../assets/images/home/trending/homeo.jpg'
import Climax from '../../../assets/images/home/trending/climax.jpg'
import Bpl from '../../../assets/images/home/trending/bpl.jpg'
import Curae from '../../../assets/images/home/trending/curae.jpg'
import Inatur from '../../../assets/images/home/trending/inatur.jpg'
import Vanesa from '../../../assets/images/home/trending/vanesa.jpg'
import { useNavigate } from 'react-router-dom';
const Trending = () =>{
    const navigate = useNavigate();
    const navigateMedicine = () => {
        navigate('/inner/innerMed');
      };
    const responsive = {
        superLargeDesktop: {
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
      const SlideArr = [
        {
            "Image":Healthy
        },
        {
            "Image":Acuve
        },
        {
            "Image":Ayurved
        },
        {
            "Image":Grow
        },
        {
            "Image":Luci
        },
        {
            "Image":Mendwell
        },
        {
            "Image":Morepen
        },
        {
            "Image":Relispray
        },
        {
            "Image":Satthwa
        },
        {
            "Image":Homeo
        },
        {
            "Image":Climax
        },
        {
            "Image":Bpl
        },
        {
            "Image":Curae
        },
        {
            "Image":Inatur
        },
        {
            "Image":Vanesa
        },
      ]
    return(
        <>
            <div className="home-labs-img">
            <div className="trending">
                <p className="lab">Trending today</p>
                <div>      
                    <Carousel responsive={responsive}>
                         {
                            SlideArr.map((item) =>{
                            return(
                                <>
                                    <div className="trend-col">
                                        <img style={{cursor:'pointer'}} onClick={navigateMedicine} className="sale-img" src={item.Image} alt="" />
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
export default Trending