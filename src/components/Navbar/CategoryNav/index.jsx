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
      Icon: Pill,
      path: "/inner/innerMed",
    },
    {
      id: 2,
      name: "Lab Tests",
      Icon: FlaskConical,
      path: "/lab",
    },
    {
      id: 3,
      name: "Health Care",
      Icon: Syringe,
      path: "/inner/healthCare",
    },
    {
      id: 4,
      name: "Health Blogs",
      Icon: Newspaper,
      path: "/inner/healthBlog",
    },
    {
      id: 5,
      name: "Doctor",
      Icon: Stethoscope,
      path: "/inner/doctor",
    },
    {
      id: 6,
      name: "Ayurveda",
      Icon: Sprout,
      path: "/inner/innerAyur",
    },
    {
      id: 7,
      name: "Offers",
      Icon: BadgePercent,
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
            key={navElement.id}
          >
            <navElement.Icon strokeWidth="1.25" />
            <p>{navElement.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryNav;
