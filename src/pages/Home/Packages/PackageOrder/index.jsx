import React, { useState } from "react";
import MainLayout from "../../../../components/MainLayout";
import "./packageOrder.css";
import { ChevronDown } from "lucide-react";
import Loader from "../../../../components/loader";
import { useNavigate } from "react-router-dom";

const PackageOrder = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="packageOrder-mainContainer">
        <div className="packageOrder-borderContainer">
          <p className="packageOrder-title">
            TitHealthy 2023 Full Body Checkup le
          </p>
          <p className="packageOrder-description">Diabetics</p>
          <div className="packageOrder-flexContainer">
            <p className="packageOrder-mrpText"> ₹1234</p>
            <p className="packageOrder-discountText">
              MRP:<span className="packageOrder-overLine">₹1234</span>
            </p>
          </div>
          <div className="packageOrder-separator" />
          <div className="packageOrder-justifyContainer">
            <div className="packageOrder-flexContainer">
              <p>Next Slot avaiable: date,time</p>
              <p>Reports In:days</p>
            </div>
            <button
              className="packageOrder-button"
              onClick={() => navigate("/packagecart")}
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="packageOrder-borderContainer">
          <div>
            <p>Sample Type</p>
            <p>Blood,Urine</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PackageOrder;
