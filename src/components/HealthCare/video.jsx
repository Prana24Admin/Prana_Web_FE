import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../assets/css/Health/healthCare.css'
const Video = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
    return(
        <>
            <div>
                <p className='user-txt'>User Experiences</p>
            </div>
            <div className='youtube-link'>
                <Carousel responsive={responsive}>
                    <div className='youtub'>
                      <iframe width="350" height="315" src="https://www.youtube.com/embed/k0g8DXL0GxY"></iframe>
                    </div>
                    <div className='youtub'>
                        <object width="350" height="315" data="https://www.youtube.com/embed/oIUzyrGUDQo"></object>
                    </div>
                    <div className='youtub'>
                        <object width="350" height="315" data="https://www.youtube.com/embed/V-n_w4t9eEU"></object>
                    </div>
                    <div className='youtub'>
                        <object width="350" height="315" data="https://www.youtube.com/embed/J7IuQSZdzYw"></object>
                    </div>
                </Carousel>
            </div>
           
        </>
    )
}
export default Video

