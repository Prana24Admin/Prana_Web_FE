import React from "react";
import Video from "../../assets/images/doctor/items/video.png";
import Near from "../../assets/images/doctor/items/near.jpg";
import Surgery from "../../assets/images/doctor/items/surgery.jpg";
import Lab from "../../assets/images/doctor/items/lab.jpg";
import Medicine from "../../assets/images/doctor/items/medicine.jpg";
import "../../assets/css/Doctor/items.css";
import { useNavigate } from "react-router-dom";
const DoctorItem = () => {
  const navigate = useNavigate();
  const navigateVideoConsultant = () => {
    navigate("/inner/doctor/consultant");
  };
  const navigateVideo = () => {
    navigate("/inner/doctor/consultant");
  };
  const navigateDoctor = () => {
    navigate("/inner/doctor/finddoctor");
  };
  const navigateMedicine = () => {
    navigate("/inner/innerMed");
  };
  const navigateLab = () => {
    navigate("/lab");
  };

  const doctorCards = [
    {
      id: 1,
      Image: Video,
      header: "Video Consultation",
      description: "connect within 60sec",
    },
    {
      id: 2,
      Image: Near,
      header: "Doctors near you",
      description: "confirmed appointments",
    },
    {
      id: 3,
      Image: Surgery,
      header: "Surgeries",
      description: "Safe and trusted surgery centers",
    },
    {
      id: 4,
      Image: Lab,
      header: "Lab Tests",
      description: "Sample pickup at your home",
    },
    {
      id: 5,
      Image: Medicine,
      header: "Medicines",
      description: "Essentials at your door steps",
    },
  ];

  return (
    <>
      <div className="items-consultationContainer">
        {doctorCards.map((doctorCard) => {
          return (
            <div
              key={doctorCard.id}
              className="items-boxContainer"
              onClick={navigateVideoConsultant}
            >
              <img
                className="items-img"
                src={doctorCard.Image}
                alt={doctorCard.header}
              />
              <p className="items-header"> {doctorCard.header}</p>
              <p className="items-description">{doctorCard.description}</p>
            </div>
          );
        })}
      </div>

      {/* <div
          className="d-flex flex-column prac-col col-lg-2"
          onClick={navigateVideo}
        >
          <img className="prac-img" src={Near} alt="" />
          <p className="prac-par"> Doctors near you</p>
          <p className="prac-par1">confirmed appointments</p>
        </div>
        <div
          className="d-flex flex-column prac-col col-lg-2"
          onClick={navigateDoctor}
        >
          <img className="prac-img" src={Surgery} alt="" />
          <p className="prac-par"> Surgeries</p>
          <p className="prac-par1">Safe and trusted surgery centers</p>
        </div>
        <div
          className="d-flex flex-column prac-col col-lg-2"
          onClick={navigateLab}
        >
          <img className="prac-img" src={Lab} alt="" />
          <p className="prac-par"> Lab Tests</p>
          <p className="prac-par1">Sample pickup at your home</p>
        </div>
        <div
          className="d-flex flex-column prac-col col-lg-2"
          onClick={navigateMedicine}
        >
          <img className="prac-img" src={Medicine} alt="" />
          <p className="prac-par"> Medicines</p>
          <p className="prac-par1">Essentials at your door steps</p>
        </div> */}
    </>
  );
};
export default DoctorItem;
