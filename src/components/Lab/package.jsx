import React from 'react'
import Carousel from 'react-multi-carousel';
import Card from 'react-bootstrap/Card';
import 'react-multi-carousel/lib/styles.css';
import BasicWomen from '../../assets/images/lab/package/basic-women.jpg';
import CardiacBasic from '../../assets/images/lab/package/cardiac-basic.jpg';
import Cardiac from '../../assets/images/lab/package/cardiac.jpg';
import DiabeticAdv from '../../assets/images/lab/package/diabetic-adv.jpg';
import DiabeticBasic from '../../assets/images/lab/package/diabetic-basic.jpg';
import FullBody from '../../assets/images/lab/package/fullbody.jpg';
import Hairfall from '../../assets/images/lab/package/hairfall.jpg';
import HealthHeart from '../../assets/images/lab/package/health-heart-basic.jpg';
import Thyroid from '../../assets/images/lab/package/thyroid.jpg';
import VitaminDef from '../../assets/images/lab/package/vitamin-deficiency.jpg';
import Young from '../../assets/images/lab/package/young-indian.jpg';
import ThyroidBasic from '../../assets/images/lab/package/thyroid-basic.jpg'
import Tax from '../../assets/images/lab/package/tax-saver.jpg'
import '../../assets/css/Lab/index.css'
import { useNavigate } from 'react-router-dom';
const Packages = () =>{
    const navigate=useNavigate();
    const navigateAppointment =()=>{
        navigate('/inner/doctor/appointment')
    }
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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
      const newArr=[
        {
            "Image":BasicWomen,
            "Title":"BasicWomen",
            "Text":"Ideal for individual aged 11-80 years",
            "Test":"5 tests included",
            "Price":"₹899",
            "Price1":"₹499",
            "Offer":"25% Off"
        },
        {
            "Image":CardiacBasic,
            "Title":"CardiacBasic",
            "Text":"Ideal for individual aged 11-80 years",
            "Test":"5 tests included",
            "Price":"₹899",
            "Price1":"₹499",
            "Offer":"25% Off"
        },
        {
            "Image":Cardiac,
            "Title":"Cardiac",
            "Text":"Ideal for individual aged 11-80 years",
            "Test":"5 tests included",
            "Price":"₹899",
            "Price1":"₹499",
            "Offer":"25% Off"
        },
        {
            "Image":DiabeticAdv,
            "Title":"DiabeticAdv",
            "Text":"Ideal for individual aged 11-80 years",
            "Test":"5 tests included",
            "Price":"₹899",
            "Price1":"₹499",
            "Offer":"25% Off"
        },
        {
            "Image":DiabeticBasic,
            "Title":"DiabeticBasic",
            "Text":"Ideal for individual aged 11-80 years",
            "Test":"5 tests included",
            "Price":"₹899",
            "Price1":"₹499",
            "Offer":"25% Off"
        },
        {
            "Image":FullBody,
            "Title":"FullBody",
            "Text":"Ideal for individual aged 11-80 years",
            "Test":"5 tests included",
            "Price":"₹899",
            "Price1":"₹499",
            "Offer":"25% Off"
        },
        {
            "Image":Hairfall,
            "Title":"Hairfall",
            "Text":"Ideal for individual aged 11-80 years",
            "Test":"5 tests included",
            "Price":"₹899",
            "Price1":"₹499",
            "Offer":"25% Off"
        },
        {
            "Image":HealthHeart,
            "Title":"HealthHeart",
            "Text":"Ideal for individual aged 11-80 years",
            "Test":"5 tests included",
            "Price":"₹899",
            "Price1":"₹499",
            "Offer":"25% Off"
        },
        {
            "Image":Thyroid,
            "Title":"Thyroid",
            "Text":"Ideal for individual aged 11-80 years",
            "Test":"5 tests included",
            "Price":"₹899",
            "Price1":"₹499",
            "Offer":"25% Off"
        },
        {
            "Image":VitaminDef,
            "Title":"VitaminDef",
            "Text":"Ideal for individual aged 11-80 years",
            "Test":"5 tests included",
            "Price":"₹899",
            "Price1":"₹499",
            "Offer":"25% Off"
        },
        {
            "Image":Young,
            "Title":"Young",
            "Text":"Ideal for individual aged 11-80 years",
            "Test":"5 tests included",
            "Price":"₹899",
            "Price1":"₹499",
            "Offer":"25% Off"
        },

        {
            "Image":ThyroidBasic,
            "Title":"ThyroidBasic",
            "Text":"Ideal for individual aged 11-80 years",
            "Test":"5 tests included",
            "Price":"₹899",
            "Price1":"₹499",
            "Offer":"25% Off"
        },
        {
            "Image":Tax,
            "Title":"Tax",
            "Text":"Ideal for individual aged 11-80 years",
            "Test":"5 tests included",
            "Price":"₹899",
            "Price1":"₹499",
            "Offer":"25% Off"
        },



      ]
    return(
        <>
            
            <div>
                <p className='testby-par'>Popular Health Packages</p>
            </div>
            <div className='d-flex flex-row checkup-row'>
                <div className='d-flex flex-column checkup-col'>
                    <p>Featured Checkups</p>
                </div>
                <div className='d-flex flex-column checkup-col'>
                    <p>Women's Health</p>
                </div>
                <div className='d-flex flex-column checkup-col'>
                    <p>Men's Health</p>
                </div>
            </div>
            <Carousel responsive={responsive}>
                    {
                        newArr.map((item) =>{
                            return(
                                <>
                                    <div style={{marginTop:'40px',marginLeft:'40px'}}>
                                        <Card className='card-img-health-pack' id="card-health">
                                            <img className='vitamin-img-lab' src={item.Image} alt="" />
                                            <p className='vitamin-par'>{item.Title}</p>
                                            <p className='vitamin-par1' id="ayur-par-slide">{item.Text}</p>
                                            <p className='vitamin-par2'>5 tests included</p>
                                            <div className='d-flex flex-row mark-row'>
                                                <div className='d-flex flex-column'>
                                                    <p className='rate-mark'>{item.Price} <strike className="stri-mark">{item.Price1}</strike> <span>{item.Offer}</span></p>
                                                </div>
                                                <div className='d-flex flex-column'>
                                                    <p onClick={navigateAppointment} className='book-now'>Book Now</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </> 
                            )
                        }

                    )
                }
                    </Carousel>
            
        </>
    )
}
export default Packages