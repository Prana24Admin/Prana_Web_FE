import React from 'react'
import Carousel from 'react-multi-carousel';
import Card from 'react-bootstrap/Card';
import 'react-multi-carousel/lib/styles.css';
import Onion from '../../../assets/images/inner/ayurveda/hair/onion.jpg'
import Bhringraj from '../../../assets/images/inner/ayurveda/hair/bhringraj.jpg'
import Amla from '../../../assets/images/inner/ayurveda/hair/amla.jpg'
import Shikakai from '../../../assets/images/inner/ayurveda/hair/shikakai.jpg'
import Mehendi from '../../../assets/images/inner/ayurveda/hair/mehendi.jpg'
import Teatree from '../../../assets/images/inner/ayurveda/hair/teatree.jpg'
import LemonGrass from '../../../assets/images/inner/ayurveda/hair/lemongrass.jpg'
import Reetha from '../../../assets/images/inner/ayurveda/hair/reetha.jpg'
import Almond from '../../../assets/images/inner/ayurveda/hair/almond.jpg'
import '../../../assets/css/inner/ayurveda/herbs.css'

const Herbs = () =>{
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
            "Image":Onion,
            "Title":"Onion",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },
        {
            "Image":Bhringraj,
            "Title":"Bhringraj",
            "Text":"Shilajit is a mineral based extract which is pale-brown to blackish-brown in color. It is found in the Himalayan rocks and is composed of a gummy substance."
        },
        {
            "Image":Shikakai,
            "Title":"Shikakai",
            "Text":"Giloy, also known as Amrita or Guduchi in Hindi, is an herb that helps improve digestion and boost immunity. It has heart-shaped leaves that resemble betel leaves."
        },
        {
            "Image":Amla,
            "Title":"Amla",
            "Text":"Amla, also known as “Indian gooseberry”, is loaded with nutrients and is the richest natural source of vitamin C. It is widely used for many health problems."
        },
        {
            "Image":Mehendi,
            "Title":"Mehendi",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },
        {
            "Image":Teatree,
            "Title":"Teatree",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },
        {
            "Image":LemonGrass,
            "Title":"LemonGrass",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },
        {
            "Image":Reetha,
            "Title":"Reetha",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },
        {
            "Image":Almond,
            "Title":"Almond",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },

      ]
    return(
        <>
          <div> 
          <div className='innerHealth-Blog'>
                <p className='innerHealthBlog-par'>Hair Care</p>
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
                                            <p className='world-par2' id="ayur-par-slide">{item.Text}</p>
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
export default Herbs