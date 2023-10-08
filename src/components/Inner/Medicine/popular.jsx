import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FoodDrink from '../../../assets/images/inner/med/popular/inner-fooddrink.jpg'
import Vitamin from '../../../assets/images/inner/med/popular/inner-vitamin.jpg'
import Supports from '../../../assets/images/inner/med/popular/inner-supports.jpg'
import Smoking from '../../../assets/images/inner/med/popular/inner-smoking.jpg'
import Nutrition from '../../../assets/images/inner/med/popular/inner-nutrition.jpg'
import '../../../assets/css/inner/innerMed.css'
const InnerPopular = () =>{
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
            "image":FoodDrink,
            "Text":"Food Drinks"
        },
        {
            "image":Vitamin,
            "Text":"Vitamin"
        },
        {
            "image":Supports,
            "Text":"Supports"
        },
        {
            "image":Smoking,
            "Text":"Smoking"
        },
        {
            "image":Nutrition,
            "Text":"Nutrition"
        },
      ]
    return(
        <>
            <div className='innerMed-popular'>
                <p className="lab">Popular Categories</p>
            </div>
            <div>      
                <Carousel responsive={responsive}>
                    {
                        newArr.map((item) =>{
                            return(
                                <>
                                   
                                        <img className="slide-img" src={item.image} alt="" />
                                        <p className="nutri">{item.Text}</p>

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
export default InnerPopular 