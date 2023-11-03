import React, { useContext, useRef } from "react";
import "./Profile.css";
import Avatar from "../../../assets/images/profile/avatar.png";
import { ShoppingCart, User2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../libs/axios";
import { useQuery } from "@tanstack/react-query";
import { ProfileContext } from "../../../context/ProfileProvider";
import { handleRefetchProfileData } from "../../../libs/queryFunctions";
import MainLayout from "../../../components/MainLayout";

const Profile = ({ children }) => {
  const navigate = useNavigate();
  const imageRef = useRef(null);

  const { data } = useContext(ProfileContext);

  const imageUpload = async () => {
    if (!imageRef.current || !imageRef.current.files[0]) {
      return;
    }
    const formData = new FormData();
    formData.append("image", imageRef.current.files[0]);

    const response = await axiosInstance.post(
      "https://api-prana.prana24.in/api/users/profile/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    handleRefetchProfileData();
    return response.data;
  };

  return (
    <MainLayout>
      <div className="profile-container">
        <div className="profile-marginContainer">
          <div className="profile-leftContainer">
            <div className="profile-flexContainer">
              <div className="profile-avatarContainer">
                {data && data.image !== null ? (
                  <img
                    className="profile-avatarImage"
                    src={data.image}
                    alt="avatar"
                  />
                ) : (
                  <img
                    className="profile-avatarImage"
                    src={Avatar}
                    alt="avatar"
                  />
                )}
                <div className="middle">
                  <input
                    className="image-upload"
                    type="file"
                    name="image"
                    accept="image/*"
                    ref={imageRef}
                    onChange={imageUpload}
                  />
                  <div className="text">Edit</div>
                </div>
              </div>
              <div>
                <p className="profile-greeting ">Hello,</p>
                {data && (
                  <p className="profile-username">
                    {data.first_name + " " + data.last_name}
                  </p>
                )}
              </div>
            </div>
            <div className="profile-borderContainer">
              <div style={{ padding: "1.25rem 1rem" }}>
                <div
                  style={{
                    marginBottom: "0.75rem",
                  }}
                >
                  <div className="profile-optionsContainer">
                    <User2 style={{ width: "10%" }} size={24} />
                    <p className="profile-optionsTitle">Account Settings</p>
                  </div>
                  <div className="profile-innerOptions">
                    <div
                      onClick={() => navigate("/profile")}
                      className="profile-optionsMainContainer"
                    >
                      <div style={{ width: "10%" }} />
                      <p className="profile-innerOptionsText">
                        Profile Information
                      </p>
                    </div>
                    <div
                      onClick={() => navigate("/profile/address")}
                      className="profile-optionsMainContainer"
                    >
                      <div style={{ width: "10%" }} />
                      <p className="profile-innerOptionsText">
                        Manage Addresses
                      </p>
                    </div>
                  </div>
                </div>
                <div className="profile-optionsContainer">
                  <ShoppingCart style={{ width: "10%" }} size={24} />
                  <p className="profile-optionsTitle">My Orders</p>
                </div>
                <div className="profile-innerOptions">
                  <div
                    onClick={() => navigate("/orders/healthcare")}
                    className="profile-optionsMainContainer"
                  >
                    <div style={{ width: "10%" }} />
                    <p className="profile-innerOptionsText">
                      Healthcare Orders
                    </p>
                  </div>
                  <div
                    onClick={() => navigate("/orders/lab")}
                    className="profile-optionsMainContainer"
                  >
                    <div style={{ width: "10%" }} />
                    <p className="profile-innerOptionsText">Lab test Orders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-rightContainer">{children}</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
