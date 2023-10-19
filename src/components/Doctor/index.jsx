import React from "react";

// import SearchBar from "../Home/Nav/innerSearch";
import Welcome from "./welcome";
import Items from "./items";
import Clinic from "./clinic";
import Users from "./users";
import Download from "../Home/innerHome/homeDownload";
import Footer from "../Footer";
import Navbar from "../Navbar";

const DoctorIndex = () => {
  return (
    <>
      <Navbar />
      {/* <div>
        <SearchBar />
      </div> */}
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
        <Users />
      </div>
      <div>
        <Download />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default DoctorIndex;
