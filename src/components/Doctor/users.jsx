import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../assets/css/Doctor/user.css'
const User = () =>{
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return(
        <>
            <div>
                <p className='user-par'>What our users have to say?</p>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <p id='cour-par'>Very easy to book,maintain history.Hassle free from older versions of booking appointments via telephone...Thanks Prana24 to make it simple.</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p id='cour-par'>Very easy to book,maintain history.Hassle free from older versions of booking appointments via telephone...Thanks Prana24 to make it simple.</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <p id='cour-par'>Very easy to book,maintain history.Hassle free from older versions of booking appointments via telephone...Thanks Prana24 to make it simple.</p>
                    </Carousel.Item>
                </Carousel>
            </div>
           
        </>
    )
}
export default User