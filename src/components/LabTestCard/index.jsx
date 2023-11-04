import React from "react";
import "./labTestCard.css";
import axiosInstance from "../../libs/axios";
import { useMutation } from "@tanstack/react-query";

import { handleRefetchLabCartData } from "../../libs/queryFunctions";
import { useNavigate } from "react-router-dom";

const LabTestCard = ({
  test,
  selectedTests,
  setSelectedTests,
  labCartData,
}) => {
  const navigate = useNavigate();
  //Adding lab test to cart
  const handleAddToLabCart = async (test) => {
    // let isObjectFound = false;
    // if (selectedTest.length < 1) {
    //   setSelectedTest([...selectedTest, test]);
    // } else {
    //   for (let i = 0; i < selectedTest.length; i++) {
    //     if (JSON.stringify(test) === JSON.stringify(selectedTest[i])) {
    //       isObjectFound = true;
    //       break;
    //     }
    //   }
    // }
    // if (!isObjectFound) {
    //   setSelectedTest([...selectedTest, test]);
    // }
    const response = await axiosInstance.post("/cart/labcart", {
      lab_test_id: test.uuid,
    });

    return response.data;
  };

  const { mutate: mutateLabAdd, isLoading: isAddLoading } = useMutation(
    (test) => {
      return handleAddToLabCart(test);
    },
    {
      onSuccess: () => {
        localStorage.setItem("selectedTestIds", test.uuid);
        handleRefetchLabCartData();
      },
    }
  );

  //Removing Lab test from cart
  const handleRemoveFromLabCart = async (test) => {
    let filteredSelectedTest = labCartData.filter(
      (testItem) => testItem.lab_test.uuid === test.uuid
    );
    // let newSelectedTest = selectedTest.filter(
    //   (testItem) => testItem.uuid !== test.uuid
    // );
    // setSelectedTest(newSelectedTest);
    // localStorage.setItem("selectedTestIds", JSON.stringify(newSelectedTest));

    const response = await axiosInstance.delete(
      `/cart/labcart/${filteredSelectedTest[0].uuid}`
    );

    return response.data;
  };
  const { mutate: mutateLabRemove, isLoading: isRemoveLoading } = useMutation(
    (test) => {
      return handleRemoveFromLabCart(test);
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
        <p className="testCard-description">{test.content}</p>
        <div className="testCard-report">
          <p className="testCard-reportText">
            Get test report in {test.report_tat}{" "}
            {test.report_tat_unit.toLowerCase()}
          </p>
        </div>
        <div className="testCard-justifyContainer">
          <p className="testCard-price">₹{test.price}</p>
          {labCartData && (
            <button
              onClick={() => mutateLabAdd(test)}
              className="testCard-selectButton"
            >
              Book
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LabTestCard;
