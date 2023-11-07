import React from "react";
import "./about.css";

import { reviewsArray } from "../../../utils/reviews";
import ReviewCarousel from "../../../components/CarouselLayout/ReviewsCarousel";

const AboutInner = () => {
  return (
    <div className="" style={{ marginTop: "2rem" }}>
      <div className="home-labs-img">
        <p className="pra" style={{ marginBottom: "0rem" }}>
          What Our Customers have to say?
        </p>
      </div>
      <div>
        <ReviewCarousel multiData={reviewsArray} />
      </div>
    </div>
  );
};
export default AboutInner;
