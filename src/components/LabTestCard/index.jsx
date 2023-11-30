import React from "react";
import "./labTestCard.css";

import { useMutation } from "@tanstack/react-query";
import { handleRefetchLabCartData } from "../../libs/queryFunctions";
import { useNavigate } from "react-router-dom";
import { handleAddToLabCart } from "../../services/labCartService";

// LabTestCard component for rendering a card representing a lab test
const LabTestCard = ({ test }) => {
  // React Router navigation hook
  const navigate = useNavigate();

  // React Query hook for handling the mutation to add a lab test to the cart
  const { mutate: mutateLabAdd, isLoading: isAddLoading } = useMutation(
    // Mutation function to be executed
    (test) => {
      return handleAddToLabCart(test.uuid);
    },
    {
      // On successful mutation, refetch the lab cart data
      onSuccess: () => {
        handleRefetchLabCartData();
      },
    }
  );

  // JSX structure for rendering a lab test card
  return (
    <div
      className="testCard-container"
      onClick={() => navigate(`/lab/test/${test.uuid}`)}
    >
      <div className="testCard-alignColumn">
        {/* Displaying the lab test name */}
        <div>
          <p className="testCard-testName">{test.name}</p>
        </div>
        <div>
          {/* Displaying information about the test report turnaround time */}
          <div className="testCard-report">
            <p className="testCard-reportText">
              Get test report in {test.report_tat}{" "}
              {test.report_tat_unit.toLowerCase()}
            </p>
          </div>

          {/* Displaying the test price and a button to book the test */}
          <div className="testCard-justifyContainer">
            <p className="testCard-price">₹{test.price}</p>
            {<button className="testCard-selectButton">Book</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabTestCard;
