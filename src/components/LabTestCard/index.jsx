import React from "react";
import "./labTestCard.css";
import axiosInstance from "../../libs/axios";
import { useMutation } from "@tanstack/react-query";
import Loader from "../loader";

const LabTestCard = ({ test, selectedTest, setSelectedTest }) => {
  const handleAddToLabCart = async (test) => {
    setSelectedTest([...selectedTest, test]);
    const response = await axiosInstance.post("/cart/labcart", {
      lab_test_id: test.uuid,
    });

    return response.data;
  };

  const { mutate, isLoading } = useMutation(
    (test) => {
      return handleAddToLabCart(test);
    },
    {
      onSuccess: () => {
        localStorage.setItem("selectedTestIds", JSON.stringify(selectedTest));
      },
    }
  );

  return (
    <div className="testCard-container">
      <div onClick={() => console.log("click")}>
        <p className="testCard-testName">{test.name}</p>
        <p className="testCard-description">{test.content}</p>
        <div className="testCard-report">
          <p className="testCard-reportText">
            Get test report in {test.report_tat}{" "}
            {test.report_tat_unit.toLowerCase()}
          </p>
        </div>
        <p className="testCard-price">₹{test.price}</p>
      </div>
      <button onClick={() => mutate(test)} className="testCard-selectButton">
        {isLoading ? <Loader /> : "Select"}
      </button>
    </div>
  );
};

export default LabTestCard;
