import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import'../../../assets/css/Home/homeLabs.css';
import Body from '../../../assets/images/home/body.png'
import Thyroid from '../../../assets/images/home/thyroid.png'
import Vitamins from '../../../assets/images/home/vitamin_labs.png'
import Diabetes from '../../../assets/images/home/diabetes.jpg'
import Women from '../../../assets/images/home/women.jpg'
import Covid from '../../../assets/images/home/covid.jpg'
import Fever from '../../../assets/images/home/fever.png'
import { useNavigate } from "react-router-dom";
const HomeLabs = () => {
  const navigate= useNavigate();
  const navigateLab = () => {
    navigate('/inner/lab');
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
  const LabsArr = [
    {
      "image":Body
    },
    {
      "image":Thyroid
    },
    {
      "image":Vitamins
    },
    {
      "image":Diabetes
    },
    {
      "image":Women
    },
    {
      "image":Covid
    },
    {
      "image":Fever
    }  
]
  return (
    <>
    <div className="home-labs-img">
      <div className="lab-container">
        <p className="lab">Lab Tests by Health Concern</p>
        <p className="lab-test">Powered by Thyrocare</p>
      </div>
        <Carousel responsive={responsive}>
          {
            LabsArr.map((item) =>{
              return(
                <>
                  <div style={{cursor:'pointer'}} className="trend-col" onClick={navigateLab}>
                    <img className="slide-img" src={item.image} alt="" />
                  </div>
                </> 
              )
            }

            )
          }
        </Carousel>
      </div>
    </>
  );
}

export default HomeLabs