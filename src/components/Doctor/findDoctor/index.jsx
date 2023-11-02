import React from "react";

import Filter from "./filter";
import Available from "./available";

import MainLayout from "../../MainLayout";
const FindDoctorIndex = () => {
  return (
    <MainLayout>
      <div>
        <Filter />
      </div>
      <div>
        <Available />
      </div>
    </MainLayout>
  );
};
export default FindDoctorIndex;
