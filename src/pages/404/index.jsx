import React from "react";
import ErrorImage from "../../assets/images/VectorImages/404 Error.png";
import MainLayout from "../../components/MainLayout";

const NotFound = () => {
  return (
    <div>
      <MainLayout>
        <img
          style={{
            width: "55vw",
            height: "95vh",
            maxWidth: "1024px",
            margin: "auto",
            paddingTop: "11rem",
          }}
          src={ErrorImage}
          alt="Error"
        />
      </MainLayout>
    </div>
  );
};

export default NotFound;
