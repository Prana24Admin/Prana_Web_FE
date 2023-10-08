import React from 'react'
import Carousel from 'react-multi-carousel';
import Card from 'react-bootstrap/Card';
import 'react-multi-carousel/lib/styles.css';
import Alsi from '../../../assets/images/inner/ayurveda/digestive/alsi.jpg'
import Ginger from '../../../assets/images/inner/ayurveda/digestive/ginger.jpg'
import Dhania from '../../../assets/images/inner/ayurveda/digestive/dhania.jpg'
import Fennel from '../../../assets/images/inner/ayurveda/digestive/fennel.jpg'
import Bael from '../../../assets/images/inner/ayurveda/digestive/bael.jpg'
import Alovera from '../../../assets/images/inner/ayurveda/digestive/alovera.jpg'
import Licorice from '../../../assets/images/inner/ayurveda/digestive/amla.jpg'
import Amla from '../../../assets/images/inner/ayurveda/digestive/olive.jpg'
import Ajwain from '../../../assets/images/inner/ayurveda/digestive/ajwain.jpg'
import '../../../assets/css/inner/ayurveda/herbs.css'

const Digestive = () =>{
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
            "Image":Alsi,
            "Title":"Alsi",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },
        {
            "Image":Ginger,
            "Title":"Ginger",
            "Text":"Shilajit is a mineral based extract which is pale-brown to blackish-brown in color. It is found in the Himalayan rocks and is composed of a gummy substance."
        },
        {
            "Image":Dhania,
            "Title":"Dhania",
            "Text":"Giloy, also known as Amrita or Guduchi in Hindi, is an herb that helps improve digestion and boost immunity. It has heart-shaped leaves that resemble betel leaves."
        },
        {
            "Image":Fennel,
            "Title":"Fennel",
            "Text":"Amla, also known as “Indian gooseberry”, is loaded with nutrients and is the richest natural source of vitamin C. It is widely used for many health problems."
        },
        {
            "Image":Bael,
            "Title":"Bael",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },
        {
            "Image":Alovera,
            "Title":"Alovera",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },
        {
            "Image":Licorice,
            "Title":"Licorice",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },
        {
            "Image":Amla,
            "Title":"Amla",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },
        {
            "Image":Ajwain,
            "Title":"Ajwain",
            "Text":"Ashwagandha is an important herb of the Ayurvedic system of medicine. It is also known as Indian ginseng or winter cherry."
        },

      ]
    return(
        <>
          <div> 
          <div className='innerHealth-Blog'>
                <p className='innerHealthBlog-par'>Digestive Care</p>
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
export default Digestive