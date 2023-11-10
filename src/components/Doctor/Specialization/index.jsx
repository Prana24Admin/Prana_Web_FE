import React from "react";
import "./specialization.css";

import MainLayout from "../../MainLayout";
import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import LazyLoadedImage from "../../../libs/LazyLoadedImage";
import { useNavigate } from "react-router-dom";

// Loading spinner component
import Loader from "../../Loader";

const Specialization = () => {
  // React Router navigation hook
  const navigate = useNavigate();

  // Function to fetch all specializations from the server
  const fetchAllSpecializations = async () => {
    const response = await axiosInstance.get(
      "/filters?type=CONSULTATION_SPECIALIZATION"
    );
    return response.data;
  };

  // UseQuery hook to fetch and manage data, loading, and error states
  const {
    data: specializationData,
    isLoading,
    error,
  } = useQuery(["Specializations"], fetchAllSpecializations);

  // Function to handle navigation to a specific specialization
  const handleNavigationSpecialization = (specializationId) => {
    navigate(`/doctor/specialization/${specializationId}`);
  };

  // JSX structure for the Specialization component
  return (
    <MainLayout>
      <section className="specialization-container">
        {/* Loading spinner during data fetching */}
        {isLoading && (
          <div className="fullContainer">
            <Loader width={"4rem"} height={"4rem"} />
          </div>
        )}

        {/* Error message if there is an issue fetching data */}
        {error && (
          <div>
            <p>Error fetching. Try again</p>
          </div>
        )}

        {/* Displaying specializations if data is available */}
        {specializationData && (
          <div
            className="favorites-gridContainer"
            style={{ marginBottom: "1rem" }}
          >
            {/* Mapping through specializations and creating cards for each */}
            {specializationData.data.length > 0 ? (
              specializationData.data.map((specialization) => (
                <div
                  key={specialization.uuid}
                  className="card-borderContainer"
                  onClick={() =>
                    handleNavigationSpecialization(specialization.uuid)
                  }
                >
                  {/* Lazy-loaded image for each specialization */}
                  <LazyLoadedImage
                    className={"card-image"}
                    src={specialization.image}
                    alt={specialization.name}
                  />
                  <p>{specialization.name}</p>
                </div>
              ))
            ) : (
              // Message if there are no available specializations
              <div>
                <p>No available specializations</p>
              </div>
            )}
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default Specialization;
