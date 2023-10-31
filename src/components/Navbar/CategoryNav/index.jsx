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
  const pathName = window.location.pathname;

  const navElements = [
    {
      id: 1,
      name: "Medicine",
      Icon: Pill,
      path: "/inner/innerMed",
      active: pathName.includes("/innerMed"),
    },
    {
      id: 2,
      name: "Lab Tests",
      Icon: FlaskConical,
      path: "/lab",
      active: pathName.includes("/lab"),
    },
    {
      id: 3,
      name: "Health Care",
      Icon: Syringe,
      path: "/healthcare",
      active: pathName.includes("/healthcare"),
    },
    {
      id: 4,
      name: "Health Blogs",
      Icon: Newspaper,
      path: "/inner/healthBlog",
      active: pathName.includes("/healthBlog"),
    },
    {
      id: 5,
      name: "Doctor",
      Icon: Stethoscope,
      path: "/doctor",
      active: pathName.includes("/doctor"),
    },
    {
      id: 6,
      name: "Ayurveda",
      Icon: Sprout,
      path: "/inner/innerAyur",
      active: pathName.includes("/innerAyur"),
    },
    {
      id: 7,
      name: "Offers",
      Icon: BadgePercent,
      path: "/offers",
      active: pathName.includes("/offers"),
    },
  ];

  return (
    <div className="innerNav-mainContainer">
      <div className="innerNav-flexContainer">
        {navElements.map((navElement) => (
          <div
            className={
              navElement.active
                ? "innerNav-bodyContainerActive"
                : "innerNav-bodyContainer"
            }
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
