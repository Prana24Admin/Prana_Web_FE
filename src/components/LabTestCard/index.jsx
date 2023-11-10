import React from "react";
import "./labTestCard.css";
import axiosInstance from "../../libs/axios";
import { useMutation } from "@tanstack/react-query";

import { handleRefetchLabCartData } from "../../libs/queryFunctions";
import { useNavigate } from "react-router-dom";
import { handleAddToLabCart } from "../../services/labCartService";

const LabTestCard = ({ test }) => {
  const navigate = useNavigate();

  const { mutate: mutateLabAdd, isLoading: isAddLoading } = useMutation(
    (test) => {
      return handleAddToLabCart(test.uuid);
    },
    {
      onSuccess: () => {
        handleRefetchLabCartData();
      },
    }
  );

  return (
    <div
      className="testCard-container"
      onClick={() => navigate(`/lab/test/${test.uuid}`)}
    >
      <div>
        <p className="testCard-testName">{test.name}</p>
        <div className="testCard-report">
          <p className="testCard-reportText">
            Get test report in {test.report_tat}{" "}
            {test.report_tat_unit.toLowerCase()}
          </p>
        </div>
        <div className="testCard-justifyContainer">
          <p className="testCard-price">₹{test.price}</p>
          {
            <button
              onClick={() => mutateLabAdd(test.uuid)}
              className="testCard-selectButton"
            >
              Book
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default LabTestCard;
