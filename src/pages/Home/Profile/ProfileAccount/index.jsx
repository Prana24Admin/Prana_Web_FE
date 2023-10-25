import React, { useContext, useState } from "react";
import "../Profile.css";
import Profile from "..";
import Input from "../../../../components/Input";
import { ProfileContext } from "../../../../context/ProfileProvider";
import { FileEdit, X } from "lucide-react";
import axiosInstance from "../../../../libs/axios";

const ProfileAccount = () => {
  const { data } = useContext(ProfileContext);
  const [edit, setEdit] = useState(false);

  const [userData, setUserData] = useState({
    firstName: data?.first_name,
    lastName: data?.last_name,
    email: data?.email,
    phoneNumber: data?.phone_number,
  });

  const updateUserProfile = async () => {
    const response = await axiosInstance.patch("/users/profile", {
      first_name: userData.firstName,
      last_name: userData.lastName,
      email: userData.email,
      phone_number: userData.phoneNumber,
    });
    console.log(response.data);
    setEdit(false);
    return response.data;
  };

  return (
    <Profile>
      <div className="profile-innerContainer">
        <div onClick={() => setEdit(!edit)} className="profile-editButton">
          {edit ? <X size={16} /> : <FileEdit size={16} />}
          <p>{edit ? "Cancel" : "Edit"}</p>
        </div>
        <p className="profile-header">Profile Information</p>
        <div className="profile-inputsContainer">
          <Input
            label={"First Name"}
            value={edit ? userData.firstName : data?.first_name}
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
            disabled={!edit}
          />
          <Input
            label={"Last Name"}
            value={edit ? userData.lastName : data?.last_name}
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
            disabled={!edit}
          />
        </div>

        <div className="profile-inputsContainer">
          <Input
            label={"Email"}
            type="email"
            value={edit ? userData.email : data?.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            disabled={true}
          />
        </div>
        <div className="profile-inputsContainer">
          <Input
            label={"Phone number"}
            value={edit ? userData.phoneNumber : data?.phone_number}
            onChange={(e) =>
              setUserData({ ...userData, phoneNumber: e.target.value })
            }
            disabled={!edit}
          />
        </div>
        {edit && (
          <button onClick={updateUserProfile} className="profile-saveButton">
            Save
          </button>
        )}
      </div>
    </Profile>
  );
};

export default ProfileAccount;
