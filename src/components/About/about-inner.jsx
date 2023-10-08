import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../assets/css/About/about.css'
import Footer from '../Home/innerHome/footer'
const AboutInner = () =>{
    const responsive = {
        superLargeDesktop: {
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
      const aboutArr =[
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
        {
            "par":"Rajarshi Sarkar",
            "paragraph":"April 22,2022",
            "Text":" The app is really wonderful. Being a Product Manager myself, I would say that the User experience (UI/UX) of the app is top notch (easy to use, simple and convenient). Coming to services and delivery, I would say Pharmeasy is doing a tremendous job even during this unprecedented pandemic situation."
        },
      ]
    return(
        <>
            <div className="home-labs-img">
                <p className="lab">What Our Customers have to say?</p>
            </div>
            <div>      
                <Carousel responsive={responsive}>
                    {
                        aboutArr.map((item) =>{
                            return(
                                <>
                                    <div className="trend-col">
                                        <p className="about-inner-par">{item.par}</p>
                                        <p className="about-inner-par1">{item.paragraph}</p>
                                        <p className="about-inner-par2">{item.Text} </p> 
                                    </div>
                                </> 
                            )
                        }

                    )
                }

            </Carousel>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default AboutInner