import React from 'react'
import Carousel from 'react-multi-carousel';
import Card from 'react-bootstrap/Card';
import 'react-multi-carousel/lib/styles.css';
import Ashwagandha from '../../../assets/images/inner/ayurveda/herbs/Ashwagandha.jpg'
import Shilajit from '../../../assets/images/inner/ayurveda/herbs/shilajit.jpg'
import Giloy from '../../../assets/images/inner/ayurveda/herbs/giloy.jpg'
import Amla from '../../../assets/images/inner/ayurveda/herbs/amla.jpg'
import Isabgol from '../../../assets/images/inner/ayurveda/herbs/isabgol.jpg'
import Turmeric from '../../../assets/images/inner/ayurveda/herbs/turmeric.jpg'
import Honey from '../../../assets/images/inner/ayurveda/herbs/honey.jpg'
import Shatavari from '../../../assets/images/inner/ayurveda/herbs/shatavari.jpg'
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
            "Image":Ashwagandha,
            "Title":"Ashwagandha",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },
        {
            "Image":Shilajit,
            "Title":"Shilajit",
            "Text":"Shilajit is a mineral based extract which is pale-brown to blackish-brown in color. It is found in the Himalayan rocks and is composed of a gummy substance."
        },
        {
            "Image":Giloy,
            "Title":"Giloy",
            "Text":"Giloy, also known as Amrita or Guduchi in Hindi, is an herb that helps improve digestion and boost immunity. It has heart-shaped leaves that resemble betel leaves."
        },
        {
            "Image":Amla,
            "Title":"Amla",
            "Text":"Amla, also known as “Indian gooseberry”, is loaded with nutrients and is the richest natural source of vitamin C. It is widely used for many health problems."
        },
        {
            "Image":Isabgol,
            "Title":"Isabgol",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },
        {
            "Image":Turmeric,
            "Title":"Turmeric",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },
        {
            "Image":Honey,
            "Title":"Honey",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },
        {
            "Image":Shatavari,
            "Title":"Shatavari",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },

      ]
    return(
        <>
          <div> 
          <div className='innerHealth-Blog'>
                <p className='innerHealthBlog-par'>Featured Herbs</p>
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