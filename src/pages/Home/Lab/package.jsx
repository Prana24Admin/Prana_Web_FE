import React from "react";
import "../../../assets/css/Lab/index.css";

import BasicWomen from "../../../assets/images/lab/package/basic-women.jpg";
import CardiacBasic from "../../../assets/images/lab/package/cardiac-basic.jpg";
import Cardiac from "../../../assets/images/lab/package/cardiac.jpg";
import DiabeticAdv from "../../../assets/images/lab/package/diabetic-adv.jpg";
import DiabeticBasic from "../../../assets/images/lab/package/diabetic-basic.jpg";
import FullBody from "../../../assets/images/lab/package/fullbody.jpg";
import Hairfall from "../../../assets/images/lab/package/hairfall.jpg";
import HealthHeart from "../../../assets/images/lab/package/health-heart-basic.jpg";
import Thyroid from "../../../assets/images/lab/package/thyroid.jpg";
import VitaminDef from "../../../assets/images/lab/package/vitamin-deficiency.jpg";
import Young from "../../../assets/images/lab/package/young-indian.jpg";
import ThyroidBasic from "../../../assets/images/lab/package/thyroid-basic.jpg";
import Tax from "../../../assets/images/lab/package/tax-saver.jpg";

import TestPackageCarousel from "../../../components/CarouselLayout/TestPackageCarousel";

const Packages = () => {
  const newArr = [
    {
      Image: BasicWomen,
      Title: "BasicWomen",
      Text: "Ideal for individual aged 11-80 years",
      Test: "5 tests included",
      Price: "₹899",
      Price1: "₹499",
      Offer: "25% Off",
    },
    {
      Image: CardiacBasic,
      Title: "CardiacBasic",
      Text: "Ideal for individual aged 11-80 years",
      Test: "5 tests included",
      Price: "₹899",
      Price1: "₹499",
      Offer: "25% Off",
    },
    {
      Image: Cardiac,
      Title: "Cardiac",
      Text: "Ideal for individual aged 11-80 years",
      Test: "5 tests included",
      Price: "₹899",
      Price1: "₹499",
      Offer: "25% Off",
    },
    {
      Image: DiabeticAdv,
      Title: "DiabeticAdv",
      Text: "Ideal for individual aged 11-80 years",
      Test: "5 tests included",
      Price: "₹899",
      Price1: "₹499",
      Offer: "25% Off",
    },
    {
      Image: DiabeticBasic,
      Title: "DiabeticBasic",
      Text: "Ideal for individual aged 11-80 years",
      Test: "5 tests included",
      Price: "₹899",
      Price1: "₹499",
      Offer: "25% Off",
    },
    {
      Image: FullBody,
      Title: "FullBody",
      Text: "Ideal for individual aged 11-80 years",
      Test: "5 tests included",
      Price: "₹899",
      Price1: "₹499",
      Offer: "25% Off",
    },
    {
      Image: Hairfall,
      Title: "Hairfall",
      Text: "Ideal for individual aged 11-80 years",
      Test: "5 tests included",
      Price: "₹899",
      Price1: "₹499",
      Offer: "25% Off",
    },
    {
      Image: HealthHeart,
      Title: "HealthHeart",
      Text: "Ideal for individual aged 11-80 years",
      Test: "5 tests included",
      Price: "₹899",
      Price1: "₹499",
      Offer: "25% Off",
    },
    {
      Image: Thyroid,
      Title: "Thyroid",
      Text: "Ideal for individual aged 11-80 years",
      Test: "5 tests included",
      Price: "₹899",
      Price1: "₹499",
      Offer: "25% Off",
    },
    {
      Image: VitaminDef,
      Title: "VitaminDef",
      Text: "Ideal for individual aged 11-80 years",
      Test: "5 tests included",
      Price: "₹899",
      Price1: "₹499",
      Offer: "25% Off",
    },
    {
      Image: Young,
      Title: "Young",
      Text: "Ideal for individual aged 11-80 years",
      Test: "5 tests included",
      Price: "₹899",
      Price1: "₹499",
      Offer: "25% Off",
    },

    {
      Image: ThyroidBasic,
      Title: "ThyroidBasic",
      Text: "Ideal for individual aged 11-80 years",
      Test: "5 tests included",
      Price: "₹899",
      Price1: "₹499",
      Offer: "25% Off",
    },
    {
      Image: Tax,
      Title: "Tax",
      Text: "Ideal for individual aged 11-80 years",
      Test: "5 tests included",
      Price: "₹899",
      Price1: "₹499",
      Offer: "25% Off",
    },
  ];
  return (
    <>
      <div className="package-container">
        <div>
          <p className="testby-par">Popular Health Packages</p>
        </div>
        <div className="d-flex flex-row checkup-row">
          <div className="d-flex flex-column checkup-col">
            <p>Featured Checkups</p>
          </div>
          <div className="d-flex flex-column checkup-col">
            <p>Women's Health</p>
          </div>
          <div className="d-flex flex-column checkup-col">
            <p>Men's Health</p>
          </div>
        </div>
        <TestPackageCarousel multiData={newArr} />
      </div>
    </>
  );
};
export default Packages;
