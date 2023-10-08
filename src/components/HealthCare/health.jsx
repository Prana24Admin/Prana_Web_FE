import React from 'react'
import Carousel from 'react-multi-carousel';
import Card from 'react-bootstrap/Card';
import 'react-multi-carousel/lib/styles.css';
import Lupus from '../../assets/images/health/lupus.jpg'
import Digestive from '../../assets/images/health/digestive.jpg'
import Menstrual from '../../assets/images/health/menstrual.jpg'
import MothersDay from '../../assets/images/health/mothersDay.jpg'
import World from '../../assets/images/health/world.jpg'
import '../../assets/css/Health/healthCare.css'

const InnerHealthBlog = () =>{
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
            "Image":Lupus,
            "Title":"Lupus",
            "Text":"Significance",
            "Par":"World Lupud day is commemorated on May10 worldwide every year to raise"
        },
        {
            "Image":Digestive,
            "Title":"Digestive",
            "Text":"Significance",
            "Par":"World Lupud day is commemorated on May10 worldwide every year to raise"
        },
        {
            "Image":Menstrual,
            "Title":"Menstrual",
            "Text":"Significance",
            "Par":"World Lupud day is commemorated on May10 worldwide every year to raise"
        },
        {
            "Image":MothersDay,
            "Title":"MothersDay",
            "Text":"Significance",
            "Par":"World Lupud day is commemorated on May10 worldwide every year to raise"
        },
        {
            "Image":World,
            "Title":"World",
            "Text":"Significance",
            "Par":"World Lupud day is commemorated on May10 worldwide every year to raise"
        },
       
      ]
    return(
        <>
          <div> 
            <div className='innerHealth-Blog'>
                <p className='innerHealthBlog-par'>Health</p>
                <p className='innerHealthBlog-par1'>A round-up of all the health news you can use, stay updated on new treatment, medical research, and wellness</p>
            </div>  
                <Carousel responsive={responsive}>
                    {
                        newArr.map((item) =>{
                            return(
                                <>
                                    <div className='card-card-innercared'>
                                        <Card className='card-img-health-care' id="card-health">
                                            <img className='vitamin-img-healthcare' src={item.Image} alt="" />
                                            <p className='world-par'>{item.Title}</p>
                                            <p className='world-par'>{item.Text}</p>
                                            <p className='world-par2' id="ayur-par-slide">{item.Par}</p>
                                        </Card>
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
export default InnerHealthBlog