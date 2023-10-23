import React, { useState } from "react";
import MainLayout from "../../../../components/MainLayout";
import "./labTests.css";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import LabTestCard from "../../../../components/LabTestCard";
import { Trash2 } from "lucide-react";

const LabTests = () => {
  const [selectedTest, setSelectedTest] = useState(
    JSON.parse(localStorage.getItem("selectedTestIds")) ?? []
  );

  const fetchAllLabTests = async () => {
    const response = await axiosInstance.get("/lab/test");
    return response.data;
  };
  const { data, isLoading, error } = useQuery(["LabTests"], fetchAllLabTests);

  const total = selectedTest.reduce((sum, test) => {
    return sum + parseFloat(test.price);
  }, 0);

  return (
    <MainLayout>
      <div className="labTests-container">
        <div className="labTests-leftContainer">
          <p className="labTests-title">Lab Tests</p>
          <div className="labTests-innerContainer">
            {data &&
              data.data.map((test) => (
                <LabTestCard
                  key={test.uuid}
                  test={test}
                  selectedTest={selectedTest}
                  setSelectedTest={setSelectedTest}
                />
              ))}
          </div>
        </div>

        <div className="labTests-rightContainer">
          <p className="labTests-orderTitle">Order Summary</p>
          <div className="separator" />
          <div style={{ marginBottom: "2rem" }}>
            {selectedTest.map((test) => (
              <div
                key={test.uuid}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <p className="labTests-orderItems">{test.name}</p>
                <p className="labTests-orderItemsPrice">₹{test.price}</p>
              </div>
            ))}
          </div>
          <div className="separator" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
          >
            <p className="labTests-orderTotalItemsPrice">Total</p>
            <p className="labTests-orderTotalItemsPrice">₹{total.toFixed(2)}</p>
          </div>
          <button className="labTests-viewCartButton">view cart</button>
        </div>
      </div>
    </MainLayout>
  );
};

export default LabTests;
