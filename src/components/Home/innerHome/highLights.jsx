import React from "react";
import "../../../assets/css/Home/highLights.css";
import { Pill, Truck, Users2 } from "lucide-react";

const HighLights = () => {
  const highLightsList = [
    {
      id: 1,
      Icon: Truck,
      title: "Lightning-Fast Delivery",
      description: "Experience superfast delivery for medicine on time",
    },
    {
      id: 2,
      Icon: Pill,
      title: "Medicine",
      description: "Get your every medical need",
    },
    {
      id: 3,
      Icon: Users2,
      title: "24x7 Customer support",
      description: "Get your query resolved instantly",
    },
  ];
  return (
    <>
      <div className="highLights-mainContainer">
        <p className="highLights-heading">Why to choose us?</p>
        <div className="highLights-flexContainer">
          {highLightsList.map((highlight) => (
            <div key={highlight.id} className="highLight-boxContainer">
              <highlight.Icon size={30} color={"var(--crimsonPink)"} />
              <div>
                <p className="highLights-title">{highlight.title}</p>
                <p className="highLights-description">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default HighLights;
