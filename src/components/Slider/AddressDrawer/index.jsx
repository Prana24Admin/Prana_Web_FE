import { Building, CheckCircle, Home } from "lucide-react";
import Input from "../../Input";
import "../../../pages/Home/Profile/ProfileAddress/AddressModal/AddressModal.css";
import axiosInstance from "../../../libs/axios";
import { handleRefetchProfileData } from "../../../libs/queryFunctions";
import { useContext, useState } from "react";
import { ProfileContext } from "../../../context/ProfileProvider";
import { v4 as uuidv4 } from "uuid";
import { Button } from "react-bootstrap";

export const AddressDrawer = ({ method, additionalAddress, onClose }) => {
  const { data } = useContext(ProfileContext);

  const [addressData, setAddressData] = useState({
    id:
      method === "add"
        ? uuidv4()
        : method === "edit"
        ? data.uuid
        : additionalAddress.id,
    place:
      method === "add"
        ? ""
        : method === "edit"
        ? data.address.place
        : additionalAddress.place,
    name:
      method === "add"
        ? ""
        : method === "edit"
        ? data.address.name
        : additionalAddress.name,
    phoneNumber:
      method === "add"
        ? ""
        : method === "edit"
        ? data.address.phoneNumber
        : additionalAddress.phoneNumber,
    houseNumber:
      method === "add"
        ? ""
        : method === "edit"
        ? data.address.houseNumber
        : additionalAddress.houseNumber,
    street:
      method === "add"
        ? ""
        : method === "edit"
        ? data.address.street
        : additionalAddress.street,
    city:
      method === "add"
        ? ""
        : method === "edit"
        ? data.address.city
        : additionalAddress.city,
    state:
      method === "add"
        ? ""
        : method === "edit"
        ? data.address.state
        : additionalAddress.state,
    pinCode:
      method === "add"
        ? ""
        : method === "edit"
        ? data.address.pinCode
        : additionalAddress.pinCode,
  });

  const saveAddress = async (data) => {
    let response;
    if (method === "add") {
      if (Object.keys(data?.address) < 1) {
        response = await axiosInstance.patch("/users/profile", {
          address: addressData,
        });
      } else {
        response = await axiosInstance.patch("/users/profile", {
          additional_address: [...data?.additional_address, addressData],
        });
      }
    } else if (method === "edit") {
      response = await axiosInstance.patch("/users/profile", {
        address: addressData,
      });
    } else {
      const index = data?.additional_address.findIndex(
        (address) => address.id === additionalAddress.id
      );
      if (index !== -1) {
        const updatedAddress = [...data?.additional_address];
        updatedAddress[index] = { ...updatedAddress[index], ...addressData };
        response = await axiosInstance.patch("/users/profile", {
          additional_address: updatedAddress,
        });
      }
    }
    handleRefetchProfileData();
    onClose();
    return response.data;
  };
  return (
    <div style={{ marginTop: "1.25rem" }}>
      <div className="modal-iconContainer">
        <button
          onClick={() => setAddressData({ ...addressData, place: "Home" })}
          className="modal-innerIconContainer"
        >
          {addressData.place === "Home" ? (
            <CheckCircle size={16} strokeWidth={2.5} />
          ) : (
            <Home size={16} />
          )}

          <p>Home</p>
        </button>
        <button
          onClick={() => setAddressData({ ...addressData, place: "Work" })}
          className="modal-innerIconContainer"
        >
          {addressData.place === "Work" ? (
            <CheckCircle size={16} strokeWidth={2.5} />
          ) : (
            <Building size={16} />
          )}
          <p>Work</p>
        </button>
        <button
          onClick={() => setAddressData({ ...addressData, place: "Other" })}
          className="modal-innerIconContainer"
        >
          {addressData.place === "Other" ? (
            <CheckCircle size={16} strokeWidth={2.5} />
          ) : (
            <Building size={16} />
          )}
          <p>Other</p>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginTop: "1rem",
        }}
      >
        <Input
          label="Name"
          value={addressData.name}
          onChange={(e) =>
            setAddressData({ ...addressData, name: e.target.value })
          }
        />
        <Input
          label="Phone number"
          value={addressData.phoneNumber}
          onChange={(e) =>
            setAddressData({
              ...addressData,
              phoneNumber: e.target.value,
            })
          }
        />
        <Input label={"House No/ Apartment No"} />
        <Input
          label="Street"
          value={addressData.street}
          onChange={(e) =>
            setAddressData({ ...addressData, street: e.target.value })
          }
        />
        <Input
          label="City"
          value={addressData.city}
          onChange={(e) =>
            setAddressData({ ...addressData, city: e.target.value })
          }
        />
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Input
            label="State"
            value={addressData.state}
            onChange={(e) =>
              setAddressData({ ...addressData, state: e.target.value })
            }
          />
          <Input
            label="Pincode"
            value={addressData.pinCode}
            onChange={(e) =>
              setAddressData({ ...addressData, pinCode: e.target.value })
            }
          />
        </div>
      </div>
      <div className="addressDrawer-buttonsContainer">
        <Button
          className="addressDrawer-cancelButton"
          variant="outline"
          mr={3}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button
          onClick={() => saveAddress(data)}
          colorScheme="var(--crimsonPink)"
          className="addressDrawer-saveButton"
        >
          Save
        </Button>
      </div>
    </div>
  );
};
