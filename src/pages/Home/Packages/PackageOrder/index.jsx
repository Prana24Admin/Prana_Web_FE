import React, { useState } from "react";
import MainLayout from "../../../../components/MainLayout";
import "./packageOrder.css";
import { ChevronDown } from "lucide-react";
import Loader from "../../../../components/loader";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../../libs/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const PackageOrder = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchTestById = async () => {
    const response = await axiosInstance(`/lab/test/${id}`);
    return response.data;
  };

  const {
    data: testData,
    isLoading,
    error,
  } = useQuery(["LabTestId"], fetchTestById);

  const handleAddToLabCart = async (testId) => {
    const response = await axiosInstance.post("/cart/labcart", {
      lab_test_id: testId,
    });
    return response.data;
  };

  const { mutate, isLoading: AddingToCart } = useMutation(
    (testId) => handleAddToLabCart(testId),
    {
      onSuccess: () => navigate("/lab/cart"),
    }
  );

  return (
    <MainLayout>
      <div className="packageOrder-mainContainer">
        {testData && (
          <>
            <div className="packageOrder-borderContainer">
              <p className="packageOrder-title">{testData.name}</p>
              <p className="packageOrder-description">{testData.content}</p>
              <div className="packageOrder-flexContainer">
                <p className="packageOrder-mrpText">
                  {" "}
                  ₹
                  {(
                    testData.price -
                    testData.price * (testData.discount / 100)
                  ).toFixed(2)}
                </p>
                <p className="packageOrder-discountText">
                  MRP:
                  <span className="packageOrder-overLine">
                    ₹{testData.price}
                  </span>
                </p>
              </div>
              <div className="packageOrder-separator" />
              <div className="packageOrder-justifyContainer">
                <div className="packageOrder-flexContainer">
                  <p
                    style={{
                      textTransform: "uppercase",
                      color: "var(--ashGray)",
                      fontWeight: "500",
                    }}
                  >
                    Get your test report in {testData.report_tat}{" "}
                    {testData.report_tat_unit.toLowerCase()}
                  </p>
                </div>
                <button
                  onClick={() => mutate(testData.uuid)}
                  className="packageOrder-button"
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="packageOrder-borderContainer">
              <div>
                <p>
                  Lab :{" "}
                  <span
                    style={{ textTransform: "capitalize", fontWeight: "600" }}
                  >
                    {testData.labs[0].name}
                  </span>
                </p>
                <p>Sample Type</p>
                <p>Blood,Urine</p>
              </div>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default PackageOrder;
