import React from "react";
import "./authLayout.css";

import Logo from "../../assets/images/Prana_Logo.jpeg";
import LoginImage from "../../assets/images/VectorImages/LoginWallpaper.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="register-mainContainer">
      <img src={Logo} className="register-logo" alt="PRANA_24" />
      <div className="register-flexContainer">
        <div>
          <img
            className="register-loginImage"
            src={LoginImage}
            alt="LOGIN_IMAGE"
          />
        </div>
        <div className="register-leftContainer">{children}</div>
      </div>
    </div>
  );
};
export default AuthLayout;
