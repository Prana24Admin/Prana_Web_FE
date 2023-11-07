import React, { createContext, useState } from "react";

export const DoctorBookingContext = createContext();

const DoctorBookingProvider = ({ children }) => {
  const [data, setData] = useState();
  return (
    <DoctorBookingContext.Provider value={{ data, setData }}>
      {children}
    </DoctorBookingContext.Provider>
  );
};

export default DoctorBookingProvider;
