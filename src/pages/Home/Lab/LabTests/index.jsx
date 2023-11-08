import React, { useEffect, useState } from "react";
import "./labTests.css";

import MainLayout from "../../../../components/MainLayout";
import axiosInstance from "../../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import LabTestCard from "../../../../components/LabTestCard";
import Loader from "../../../../components/Loader";

const LabTests = () => {
  const [selectedTests, setSelectedTests] = useState([]);

  // Function to fetch all lab tests
  const fetchAllLabTests = async () => {
    const response = await axiosInstance.get("/lab/test");
    return response.data;
  };

  // Use the useQuery hook to manage lab test data and its state
  const { data, isLoading, error } = useQuery(["LabTests"], fetchAllLabTests);

  return (
    <MainLayout>
      <div className="labTests-container">
        <p className="labTests-title">Lab Tests</p>
        {isLoading && (
          // Show a loader while data is loading
          <div className="fullContainer">
            <Loader width={"4rem"} height={"4rem"} />
          </div>
        )}
        {error && (
          // Display an error message if there's an error
          <div>
            <p>Error fetching. Try again</p>
          </div>
        )}
        {data && (
          <div className="labTests-gridContainer">
            {data.data.map((test) => (
              // Render each lab test card
              <LabTestCard key={test.uuid} test={test} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default LabTests;
