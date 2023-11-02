import React from "react";

// import SearchBar from "../Home/Nav/innerSearch";
import Welcome from "./welcome";
import Items from "./items";
import Clinic from "./clinic";
import Download from "../Home/innerHome/homeDownload";
import MainLayout from "../MainLayout";

const DoctorIndex = () => {
  return (
    <MainLayout>
      <div>
        <Welcome />
      </div>
      <div>
        <Items />
      </div>
      <div>
        <Clinic />
      </div>
      <div>
        <Download />
      </div>
    </MainLayout>
  );
};
export default DoctorIndex;
