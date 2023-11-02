// import React, { useState } from "react";
// import Carousel from "react-multi-carousel";
// import Taj from "../../../assets/images/home/cashback.jpg";
// import Great from "../../../assets/images/home/cere.jpg";
// import Col from "../../../assets/images/home/weekend.jpg";
// import "../../../assets/css/Home/homeslide.css";
// // import { CarouselItem } from "react-bootstrap";
// function HomeSlide() {
//   const [index, setIndex] = useState(0);

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   const Slider = [
//     { id: 1, Image: Taj },
//     { id: 2, Image: Great },
//     { id: 3, Image: Col },
//   ];

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel
//       responsive={responsive}
//       // activeIndex={index}
//       // onSelect={handleSelect}
//       containerClass="homeSlide-mainContainer"
//     >
//       {Slider.map((item) => {
//         return (
//           // <CarouselItem>
//           <div key={item.id} className="homeSlide-innermed">
//             <img className="homeSlide-img" src={item.Image} alt="First slide" />
//           </div>
//           // </CarouselItem>
//         );
//       })}
//     </Carousel>
//     /* <Carousel
//       responsive={responsive}
//       containerClass="medicineSlider-carouselContainer"
//     >
//       {SlideArr.map((item) => {
//         return (
//           <>
//             <div className="medicineSlider-innermed">
//               <img className="medicineSlider-img" src={item.Image} alt="" />
//             </div>
//           </>
//         );
//       })}
//     </Carousel> */
//   );
// }
// export default HomeSlide;
