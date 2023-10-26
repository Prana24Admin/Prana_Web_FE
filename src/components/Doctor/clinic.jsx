import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Dentist from "../../assets/images/doctor/clinic/dentist.jpg";
import Dietitian from "../../assets/images/doctor/clinic/dietitian.jpg";
import Gas from "../../assets/images/doctor/clinic/gastroenterologist.jpg";
import GeneralDoctor from "../../assets/images/doctor/clinic/generalDoctor.jpg";
import GeneralSurgeon from "../../assets/images/doctor/clinic/generalSurgeon.jpg";
import Gynecologist from "../../assets/images/doctor/clinic/gynecologist.jpg";
import Orthopedist from "../../assets/images/doctor/clinic/orthopedist.jpg";
import Pediatrician from "../../assets/images/doctor/clinic/pediatrician.jpg";
import Physiotherapist from "../../assets/images/doctor/clinic/physiotherapist.jpg";
import "../../assets/css/Doctor/clinic.css";
import { useNavigate } from "react-router-dom";
import { Button, Card, Stack } from "react-bootstrap";
const Clinic = () => {
  const navigate = useNavigate();
  const navigateDoctor = () => {
    navigate("/inner/doctor/finddoctor");
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const Specializations = [
    {
      id: 1,
      Image: Dentist,
      Title: "Dentist",
      Text: "Teething troubles?Schedule a dental checkup",
    },
    {
      id: 2,
      Image: Dietitian,
      Title: "Dietitian",
      Text: "Get guidence on eating right food",
    },
    {
      id: 3,
      Image: Gas,
      Title: "Gas",
      Text: "Explore for issues related to digestive system",
    },
    {
      id: 4,
      Image: GeneralDoctor,
      Title: "GeneralDoctor",
      Text: "Explore the right family doctor",
    },
    {
      id: 5,
      Image: GeneralSurgeon,
      Title: "GeneralSurgeon",
      Text: "Need to get operated?Find the best surgeon",
    },
    {
      id: 6,
      Image: Gynecologist,
      Title: "Gynecologist",
      Text: "Explore for women's Health and Pregnancy.",
    },
    {
      id: 7,
      Image: Orthopedist,
      Title: "Orthopedist",
      Text: "For bone and joint issues,Spinal card and more",
    },
    {
      id: 8,
      Image: Pediatrician,
      Title: "Pediatrician",
      Text: "Child specialists and doctors for infant",
    },
    {
      id: 9,
      Image: Physiotherapist,
      Title: "Physiotherapist",
      Text: "Get it treated by trained physiotherapist",
    },
  ];
  return (
    <div className="clinic-mainContainer">
      <div className="clinic">
        <p className="clinic-title">
          Book an appointment for an in-clinic consultation
        </p>
        <p className="clinic-description">
          Find experienced doctors across all specialities
        </p>
      </div>
      <div>
        <Carousel
          responsive={responsive}
          partialVisible={false}
          renderButtonGroupOutside={true}
          // className="clinic-carouselContainer"
        >
          {Specializations.map((Specialization) => {
            return (
              <div key={Specialization.id} className="clinic-cardContainer">
                <div
                  key={Specialization.id}
                  style={{ cursor: "pointer" }}
                  className="clinic-cardWidth"
                  onClick={navigateDoctor}
                >
                  <img
                    className="clinic-cardImage"
                    src={Specialization.Image}
                    alt=""
                  />
                  <p className="clinic-header">{Specialization.Title}</p>
                  <p className="clinic-imageDescription">
                    {Specialization.Text}
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default Clinic;
