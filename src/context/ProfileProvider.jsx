import React, { createContext, useState } from "react";

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [data, setData] = useState();
  return (
    <ProfileContext.Provider value={{ data, setData }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
