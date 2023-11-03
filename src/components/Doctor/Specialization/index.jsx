import React from "react";
import MainLayout from "../../MainLayout";
import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import LazyLoadedImage from "../../../libs/LazyLoadedImage";
import { useNavigate } from "react-router-dom";
import "./specialization.css";

const Specialization = () => {
  const navigate = useNavigate();
  const fetchAllSpecializations = async () => {
    const response = await axiosInstance.get(
      "/filters?type=CONSULTATION_SPECIALIZATION"
    );
    return response.data;
  };
  const {
    data: specializationData,
    isLoading,
    error,
  } = useQuery(["Specializations"], fetchAllSpecializations);
  const handleNavigationSpecialization = (specializationId) => {
    navigate(`/doctor/specialization/${specializationId}`);
  };
  return (
    <MainLayout>
      <section className="specialization-container">
        {specializationData && (
          <div
            className="favorites-gridContainer"
            style={{ marginBottom: "1rem" }}
          >
            {specializationData.data.length > 0 ? (
              specializationData.data.map((specialization) => (
                <div
                  key={specialization.uuid}
                  className="card-borderContainer"
                  onClick={() =>
                    handleNavigationSpecialization(specialization.uuid)
                  }
                >
                  <LazyLoadedImage
                    className={"card-image"}
                    src={specialization.image}
                    alt={specialization.name}
                  />
                  <p>{specialization.name}</p>
                </div>
              ))
            ) : (
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
