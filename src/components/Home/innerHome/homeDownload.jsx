import React from "react";
import "../../../assets/css/Home/homeDownload.css";
import Playstore from "../../../assets/images/home/Download/playstore.jpg";
import AppStore from "../../../assets/images/home/Download/mac_button.jpg";
import Mobile from "../../../assets/images/VectorImages/Mobile.png";
function Downlaod() {
  return (
    <>
      <div className="homeDownload-flexContainer">
        <img
          loading="lazy"
          style={{ width: "35%" }}
          src={Mobile}
          alt="Mobile"
        />

        <div>
          <p className="homeDownload-mainTitle">
            Download The Prana24 app for free
          </p>
          <p className="homeDownload-titleDescription">
            It's Time To Unlock The Future of Your Pharmacy.
          </p>
          <p className="homeDownload-titleDescription">
            Stock up your pharmacy with ease, access credit and simplify your
            operations.
          </p>
          <div className="homeDownload-downloadButtons">
            <img
              loading="lazy"
              className="homeDownload-buttons"
              src={Playstore}
              alt=""
            />
            <img
              loading="lazy"
              className="homeDownload-buttons"
              src={AppStore}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Downlaod;
