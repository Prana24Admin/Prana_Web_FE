import React, { useEffect, useState } from "react";
import MainLayout from "../../../../components/MainLayout";
import "./labTests.css";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import LabTestCard from "../../../../components/LabTestCard";
import { Trash2 } from "lucide-react";

const LabTests = () => {
  const [selectedTests, setSelectedTests] = useState([]);

  const fetchAllLabTests = async () => {
    const response = await axiosInstance.get("/lab/test");
    return response.data;
  };
  const { data, isLoading, error } = useQuery(["LabTests"], fetchAllLabTests);

  const fetchLabTestsCart = async () => {
    const response = await axiosInstance.get("/cart/labcart");
    return response.data;
  };
  const {
    data: labCartData,
    isLoading: isLoadingCart,
    error: errorLabCart,
  } = useQuery(["LabCart"], fetchLabTestsCart);

  const total = labCartData?.data.reduce((sum, test) => {
    return sum + parseFloat(test.lab_test.price);
  }, 0);

  useEffect(() => {
    // Use localStorage to get the saved count value
    const selectedIds = localStorage.getItem("selectedTestIds");

    // If a value is found in localStorage, set the count to that value
    if (selectedIds) {
      setSelectedTests(selectedIds);
    }
  }, []);

  return (
    <MainLayout>
      <div className="labTests-container">
        <p className="labTests-title">Lab Tests</p>
        <div className="labTests-gridContainer">
          {data &&
            data.data.map((test) => (
              <LabTestCard
                key={test.uuid}
                test={test}
                selectedTest={selectedTests}
                setSelectedTest={setSelectedTests}
                labCartData={labCartData?.data}
              />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default LabTests;
