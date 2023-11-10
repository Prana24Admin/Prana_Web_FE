import React from "react";
import "../../assets/css/Doctor/items.css";

import Video from "../../assets/images/doctor/items/video.png";
import Near from "../../assets/images/doctor/items/near.jpg";
import Surgery from "../../assets/images/doctor/items/surgery.jpg";
import Lab from "../../assets/images/doctor/items/lab.jpg";
import Medicine from "../../assets/images/doctor/items/medicine.jpg";
import { useNavigate } from "react-router-dom";

const DoctorItem = () => {
  // React Router navigation hook
  const navigate = useNavigate();

  // Data array containing information about different doctor items
  const doctorCards = [
    {
      id: 1,
      Image: Video,
      header: "Video Consultation",
      description: "connect within 60sec",
      path: "/doctor",
    },
    {
      id: 2,
      Image: Near,
      header: "Doctors near you",
      description: "confirmed appointments",
      path: "/doctor/near-me",
    },
    {
      id: 3,
      Image: Surgery,
      header: "Surgeries",
      description: "Safe and trusted surgery centers",
      path: "/doctor",
    },
    {
      id: 4,
      Image: Lab,
      header: "Lab Tests",
      description: "Sample pickup at your home",
      path: "/lab/all-tests",
    },
    {
      id: 5,
      Image: Medicine,
      header: "Medicines",
      description: "Essentials at your door steps",
      path: "/medicine",
    },
  ];

  // JSX structure for rendering doctor-related items
  return (
    <>
      <div className="items-consultationContainer">
        {/* Mapping over the doctorCards array to render individual item boxes */}
        {doctorCards.map((doctorCard) => {
          return (
            <div
              key={doctorCard.id}
              className="items-boxContainer"
              onClick={() => navigate(doctorCard.path)}
            >
              {/* Displaying item image, header, and description */}
              <img
                loading="lazy"
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
    </>
  );
};

export default DoctorItem;
