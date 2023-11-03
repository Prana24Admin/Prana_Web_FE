import React, { useMemo } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
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

  const navElements = useMemo(
    () => [
      {
        id: 1,
        name: "Medicine",
        Icon: Pill,
        path: "/medicine",
        active: pathName.startsWith("/medicine"),
      },
      {
        id: 2,
        name: "Lab Tests",
        Icon: FlaskConical,
        path: "/lab",
        active: pathName.startsWith("/lab"),
      },
      {
        id: 3,
        name: "Health Care",
        Icon: Syringe,
        path: "/healthcare",
        active: pathName.startsWith("/healthcare"),
      },
      {
        id: 4,
        name: "Health Blogs",
        Icon: Newspaper,
        path: "/blogs",
        active: pathName.startsWith("/blogs"),
      },
      {
        id: 5,
        name: "Doctor",
        Icon: Stethoscope,
        path: "/doctor",
        active: pathName.startsWith("/doctor"),
      },
      {
        id: 6,
        name: "Ayurveda",
        Icon: Sprout,
        path: "/ayurveda",
        active: pathName.startsWith("/ayurveda"),
      },
      {
        id: 7,
        name: "Offers",
        Icon: BadgePercent,
        path: "/offers",
        active: pathName.startsWith("/offers"),
      },
    ],
    [pathName]
  );

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
