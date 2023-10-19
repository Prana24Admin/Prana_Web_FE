import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./categoryNav.css";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  BadgePercent,
  FlaskConical,
  Newspaper,
  Percent,
  Pill,
  Sprout,
  Stethoscope,
  Syringe,
} from "lucide-react";
const CategoryNav = () => {
  const navigate = useNavigate();

  const navElements = [
    {
      id: 1,
      name: "Medicine",
      icon: <Pill />,
      path: "/inner/innerMed",
    },
    {
      id: 2,
      name: "Lab Tests",
      icon: <FlaskConical />,
      path: "/inner/lab",
    },
    {
      id: 3,
      name: "Health Care",
      icon: <Syringe />,
      path: "/inner/healthCare",
    },
    {
      id: 4,
      name: "Health Blogs",
      icon: <Newspaper />,
      path: "/inner/healthBlog",
    },
    {
      id: 5,
      name: "Doctor",
      icon: <Stethoscope />,
      path: "/inner/doctor",
    },
    {
      id: 6,
      name: "Ayurveda",
      icon: <Sprout />,
      path: "/inner/innerAyur",
    },
    {
      id: 7,
      name: "Offers",
      icon: <BadgePercent />,
      path: "/offers",
    },
  ];

  return (
    <div className="innerNav-mainContainer">
      <div className="innerNav-flexContainer">
        {navElements.map((navElement) => (
          <div
            className="innerNav-bodyContainer"
            onClick={() => navigate(navElement.path)}
            key={navElements.id}
          >
            <p> {navElement.icon} </p>
            <p>{navElement.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryNav;
