import React from "react";
import "./labTestCard.css";
import axiosInstance from "../../libs/axios";
import { useMutation } from "@tanstack/react-query";
import Loader from "../loader";

const LabTestCard = ({ test, selectedTest, setSelectedTest, labCartData }) => {
  //Adding lab test to cart
  const handleAddToLabCart = async (test) => {
    let isObjectFound = false;
    if (selectedTest.length < 1) {
      setSelectedTest([...selectedTest, test]);
    } else {
      for (let i = 0; i < selectedTest.length; i++) {
        if (JSON.stringify(test) === JSON.stringify(selectedTest[i])) {
          isObjectFound = true;
          break;
        }
      }
    }
    if (!isObjectFound) {
      setSelectedTest([...selectedTest, test]);
    }
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
        localStorage.setItem("selectedTestIds", JSON.stringify(selectedTest));
      },
    }
  );

  //Removing Lab test from cart
  const handleRemoveFromLabCart = async (test) => {
    let filteredSelectedTest;
    if (selectedTest.includes(test)) {
      filteredSelectedTest = labCartData.filter(
        (testItem) => testItem.lab_test.uuid === test.uuid
      );
      let newSelectedTest = selectedTest.filter(
        (testItem) => testItem.uuid !== test.uuid
      );
      setSelectedTest(newSelectedTest);
    }
    const response = await axiosInstance.delete(
      `/cart/labcart/${filteredSelectedTest[0].uuid}`
    );
    console.log(response.data);
    return response.data;
  };
  const { mutate: mutateLabRemove, isLoading: isRemoveLoading } = useMutation(
    (test) => {
      return handleRemoveFromLabCart(test);
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
      {selectedTest.includes(test) ? (
        <button
          onClick={() => mutateLabRemove(test)}
          className="testCard-selectButton"
        >
          {isAddLoading ? <Loader /> : "Remove"}
        </button>
      ) : (
        <button
          onClick={() => mutateLabAdd(test)}
          className="testCard-selectButton"
        >
          {isRemoveLoading ? <Loader /> : "Select"}
        </button>
      )}
    </div>
  );
};

export default LabTestCard;
