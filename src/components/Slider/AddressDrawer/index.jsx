import { Building, CheckCircle, Home } from "lucide-react";
import "./addressDrawer.css";

import Input from "../../Input";
import axiosInstance from "../../../libs/axios";
import { handleRefetchProfileData } from "../../../libs/queryFunctions";
import { useContext, useState } from "react";
import { ProfileContext } from "../../../context/ProfileProvider";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

export const AddressDrawer = ({ method, additionalAddress, onClose }) => {
  const { data } = useContext(ProfileContext);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
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
    },
  });

  const onSubmit = async (formData) => {
    try {
      if (formData.place === "") return;
      let response;
      if (method === "add") {
        if (!data?.address) {
          response = await axiosInstance.patch("/users/profile", {
            address: formData,
          });
        } else {
          response = await axiosInstance.patch("/users/profile", {
            additional_address: [...(data?.additional_address || []), formData],
          });
        }
      } else if (method === "edit") {
        response = await axiosInstance.patch("/users/profile", {
          address: formData,
        });
      } else {
        const index = data?.additional_address.findIndex(
          (address) => address.id === additionalAddress.id
        );
        if (index !== -1) {
          const updatedAddress = [...data?.additional_address];
          updatedAddress[index] = { ...updatedAddress[index], ...formData };
          response = await axiosInstance.patch("/users/profile", {
            additional_address: updatedAddress,
          });
        }
      }
      if (response) {
        handleRefetchProfileData(); // Call the function to update profile data
        onClose(); // Close the form
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div>
      <form style={{ marginTop: "0.5rem" }} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="addressDrawer-iconContainer">
            <button
              onClick={() => setValue("place", "Home")}
              className={
                getValues("place") === "Home"
                  ? "addressDrawer-selectedInnerIconContainer"
                  : "addressDrawer-innerIconContainer"
              }
            >
              {getValues("place") === "Home" ? (
                <CheckCircle size={16} strokeWidth={2.5} />
              ) : (
                <Home size={16} />
              )}
              <p>Home</p>
            </button>
            <button
              onClick={() => setValue("place", "Work")}
              className={
                getValues("place") === "Work"
                  ? "addressDrawer-selectedInnerIconContainer"
                  : "addressDrawer-innerIconContainer"
              }
            >
              {getValues("place") === "Work" ? (
                <CheckCircle size={16} strokeWidth={2.5} />
              ) : (
                <Building size={16} />
              )}
              <p>Work</p>
            </button>
            <button
              onClick={() => setValue("place", "Other")}
              className={
                getValues("place") === "Other"
                  ? "addressDrawer-selectedInnerIconContainer"
                  : "addressDrawer-innerIconContainer"
              }
            >
              {getValues("place") === "Other" ? (
                <CheckCircle size={16} strokeWidth={2.5} />
              ) : (
                <Building size={16} />
              )}
              <p>Other</p>
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginTop: "1rem",
          }}
        >
          <div className="addressDrawer-input">
            <Input
              label="Name"
              register={register("name", {
                required: true,
              })}
              name={"name"}
              error={errors}
            />
            {errors.name?.type === "required" && (
              <p
                style={{ color: "var(--crimsonPink)", fontSize: "0.8rem" }}
                role="alert"
              >
                Name is required
              </p>
            )}
          </div>
          <div className="addressDrawer-input">
            <Input
              label="Phone number"
              register={register("phoneNumber", {
                required: true,
              })}
              name={"phoneNumber"}
              error={errors}
            />
            {errors.phoneNumber?.type === "required" && (
              <p
                style={{ color: "var(--crimsonPink)", fontSize: "0.8rem" }}
                role="alert"
              >
                Phone number is required
              </p>
            )}
          </div>
          <div className="addressDrawer-input">
            <Input
              label={"House No/ Apartment No"}
              register={register("houseNumber", {
                required: true,
              })}
              name={"houseNumber"}
              error={errors}
            />
            {errors.houseNumber?.type === "required" && (
              <p
                style={{ color: "var(--crimsonPink)", fontSize: "0.8rem" }}
                role="alert"
              >
                House number is required
              </p>
            )}
          </div>
          <div className="addressDrawer-input">
            <Input
              label="Street"
              register={register("street", {
                required: true,
              })}
              name={"street"}
              error={errors}
            />
            {errors.street?.type === "required" && (
              <p
                style={{ color: "var(--crimsonPink)", fontSize: "0.8rem" }}
                role="alert"
              >
                Street is required
              </p>
            )}
          </div>
          <div className="addressDrawer-input">
            <Input
              label="City"
              register={register("city", {
                required: true,
              })}
              name={"city"}
              error={errors}
            />
            {errors.city?.type === "required" && (
              <p
                style={{ color: "var(--crimsonPink)", fontSize: "0.8rem" }}
                role="alert"
              >
                City is required
              </p>
            )}
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div className="addressDrawer-input">
              <Input
                label="State"
                register={register("state", {
                  required: true,
                })}
                name={"state"}
                error={errors}
              />
              {errors.state?.type === "required" && (
                <p
                  style={{ color: "var(--crimsonPink)", fontSize: "0.8rem" }}
                  role="alert"
                >
                  state is required
                </p>
              )}
            </div>
            <div className="addressDrawer-input">
              <Input
                label="Pincode"
                register={register("pinCode", {
                  required: true,
                })}
                name={"pinCode"}
                error={errors}
              />
              {errors.pinCode?.type === "required" && (
                <p
                  style={{ color: "var(--crimsonPink)", fontSize: "0.8rem" }}
                  role="alert"
                >
                  Pincode is required
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="addressDrawer-buttonsContainer">
          <button className="addressDrawer-cancelButton" onClick={onClose}>
            Cancel
          </button>
          <button
            disabled={isSubmitting}
            type="submit"
            className="addressDrawer-saveButton"
          >
            {isSubmitting ? "Loading ..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};
